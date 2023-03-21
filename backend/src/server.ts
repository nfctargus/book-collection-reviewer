import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import userRouter from './routers/user.router';
import bookRouter from './routers/book.router';
import path from 'path';
import { dbConnect } from './configs/database.config';
dotenv.config();
//Connect to MongoDB
dbConnect();

const app = express();
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))

app.use("/api/users",userRouter);
app.use("/api/books",bookRouter);
app.use(express.static('public'));
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'))
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Backend running on http://localhost:" + port)
})
