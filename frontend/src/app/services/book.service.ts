import { Injectable } from '@angular/core';
import { sample_books } from 'src/books';
import { Book } from '../shared/models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

	getAllBooks():Book[] {
		return sample_books;
	}
}
