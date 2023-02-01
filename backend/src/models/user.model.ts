import { model, Schema } from "mongoose";

export interface User {
    id:string;
	email:string;
    password:string;
	name:string;	
}
export const UserSchema = new Schema<User>(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        
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