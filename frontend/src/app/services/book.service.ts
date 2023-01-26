import { Injectable } from '@angular/core';
import { Book } from 'src/shared/models/Book';
import { sample_books } from 'src/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getAllBooks():Book[] {
		return sample_books;
	}
}
