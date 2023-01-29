import express from "express";
import cors from "cors";

import userRouter from './routers/user.router';
import bookRouter from './routers/book.router';

const app = express();
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))

app.use("/api/users",userRouter);
app.use("/api/books",bookRouter);


const port = 5000;
app.listen(port, () => {
    console.log("Backend running on http://localhost:" + port)
})