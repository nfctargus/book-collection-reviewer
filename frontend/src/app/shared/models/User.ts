export class User {
	id!:string;
	email!:string;
	name!:string;
	token!:string;
	favourites?:string[];
    ratings?:[bookIsbn:string,bookRating:number];
	theme?:string;
}
