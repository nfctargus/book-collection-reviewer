import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken';

const router = Router();

import { sample_users } from "../books";
import { UserModel } from "../models/user.model";

//Populate the Database with our local data
router.get("/seed",expressAsyncHandler(async (req,res) => {
    const count = await UserModel.countDocuments();
    if(count >0) {
        res.send("Database has already been populated");
        return;
    }
    await UserModel.create(sample_users);
    res.send("Populated the database with sample data");
}))

//Log in (local)
router.post("/login", (req,res) => {
    const { email, password} = req.body;
    const user = sample_users.find(user => user.email === email && user.password === password);
    if(user) {
        res.send(generateTokenResponse(user))
    }
    else {
        res.status(400).send("Username or password is incorrect.")
    }
})
//Log in (mongo)
/* router.post("/login", expressAsyncHandler(async (req,res) => {
    const { email, password} = req.body;
    const user = await UserModel.findOne({email,password});
    if(user) {
        res.send(generateTokenResponse(user))
    }
    else {
        res.status(400).send("Username or password is incorrect.")
    }
})) */

const generateTokenResponse = (user:any) => {
    const token = jwt.sign({
        id: user.id,email:user.email
    },"PrivateKey",{
        expiresIn:"30d"
    })

    return {
        id: user.id,
        email:user.email,
        name:user.name,
        token:token
    }
}
export default router;