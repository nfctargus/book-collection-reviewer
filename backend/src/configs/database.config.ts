import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () => {
    connect(process.env.MONGO_URI!, {
        useNewUrlParser:true
    } as ConnectOptions).then(
        () => console.log("Connected to MongoDB successfully"),
        (error) => console.log(error)
    )
}