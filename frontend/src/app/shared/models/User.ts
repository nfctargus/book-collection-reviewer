export class User {
	id!:string;
	email!:string;
	firstName!:string;
	surname!:string;
	token!:string;
	favourites?:string[];
    ratings?:[bookIsbn:string,bookRating:number];
	theme?:string;
}
