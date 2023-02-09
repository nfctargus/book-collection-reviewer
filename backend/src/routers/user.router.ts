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

router.put("/update",expressAsyncHandler(async (req,res) => {
    const selectedUser = req.body;
    UserModel.findOneAndUpdate({email:selectedUser.email},{name:selectedUser.name,email:selectedUser.email,favourites:selectedUser.favourites,theme:selectedUser.theme}, (error:any,data:any) => {
        if(error) {
            console.log(error)
        } else {
            res.status(200).send();
        }
    })
}))
router.post("/login", expressAsyncHandler(async (req,res) => {
    const { email, password} = req.body;
    const user = await UserModel.findOne({email,password});
    if(user) {
        res.send(generateTokenResponse(user))
    }
    else {
        res.status(400).send("Username or password is incorrect.")
    }
}))

const generateTokenResponse = (user:any) => {
    const token = jwt.sign({
        id: user.id,email:user.email
    },process.env.USER_KEY!,{
        expiresIn:"30d"
    })

    return {
        id: user.id,
        email:user.email,
        firstName:user.firstName,
        surname:user.surname,
        token:token,
        favourites:user.favourites,
        ratings:user.ratings,
        theme:user.theme,
    }
}
export default router;