import { Router } from "express";
import jwt from 'jsonwebtoken';

const router = Router();

import { sample_users } from "../books";


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