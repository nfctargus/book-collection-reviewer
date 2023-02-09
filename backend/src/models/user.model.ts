import { model, Schema } from "mongoose";

export interface User {
    id:string;
	email:string;
    password:string;
	firstName:string;	
    surname:string;
    favourites:string[];
    ratings:[bookIsbn:string,bookRating:number];
    theme:string;
}
export const UserSchema = new Schema<User>(
    {
        firstName:{type:String,required:true},
        surname:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        favourites:{type:[String]},
        ratings:[{bookIsbn:String,bookRating:Number}],
        theme:{type:String,default:"light"}
        
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
);
export const UserModel = model<User>('user',UserSchema);