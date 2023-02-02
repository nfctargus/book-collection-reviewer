export class Book {
	id!:string;
    title!: string;
    author!: string;
    favourite!: boolean;
    stars!: number;
    imageUrl!: string;
    categories?: string[];
}
