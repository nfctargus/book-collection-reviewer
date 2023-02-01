import { model, Schema } from "mongoose";

export interface Book {
    id:string;
    isbn:string;
    name: string;
    author: string;
    favourite: boolean;
    stars: number;
    imageUrl: string;
    categories: string[];
}
export const BookSchema = new Schema<Book>(
    {
        isbn:{type:String,required:true},
        name:{type:String,required:true},
        author:{type:String,required:true},
        favourite:{type:Boolean,default:false},
        stars:{type:Number,required:true},
        imageUrl:{type:String,required:true},
        categories:{type:[String],required:true},
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
export const BookModel = model<Book>('book',BookSchema);