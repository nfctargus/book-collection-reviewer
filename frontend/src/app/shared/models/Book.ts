export class Book {
	id!:string;
    name!: string;
    author!: string;
    favourite!: boolean;
    stars!: number;
    imageUrl!: string;
    categories?: string[];
}
