import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/models/Book';
import { HttpClient } from '@angular/common/http';
import { Category } from '../shared/models/Category';
import { Observable } from 'rxjs';
import { BOOKS_BY_SEARCH_URL, BOOKS_BY_CATEGORY_URL, BOOKS_ALL_CATEGORIES_URL, BOOKS_URL, BOOK_BY_ID_URL, ADD_BOOK_URL, SEARCH_BOOK_BY_TITLE_URL, DELETE_BOOK_URL } from '../shared/models/constants/urls';
import { IBook } from '../shared/interfaces/IBook';

@Injectable({
	providedIn: 'root'
})
export class BookService {

	constructor(private http:HttpClient) { }

	getAllBooks():Observable<Book[]> {
		return this.http.get<Book[]>(BOOKS_URL);
	}
	getAllBooksBySearchTerm(searchTerm:string) {
		return this.http.get<Book[]>(BOOKS_BY_SEARCH_URL + searchTerm);
	}
	getAllCategories():Observable<Category[]>{
		return this.http.get<Category[]>(BOOKS_ALL_CATEGORIES_URL);
	}
	getAllBooksByCategory(category:string):Observable<Book[]> {
		return category == "All" ?
		this.getAllBooks() : this.http.get<Book[]>(BOOKS_BY_CATEGORY_URL + category);
	}
	getBookById(bookId:string):Observable<Book>{
		return this.http.get<Book>(BOOK_BY_ID_URL + bookId);
	}
	updateBookbyBookId(bookId:string,updatedBook:Book){
		this.http.put(BOOK_BY_ID_URL + bookId,updatedBook).subscribe();
	}
	addNewBookByIsbn(isbn:string):Observable<Object> {
		return this.http.get(ADD_BOOK_URL + isbn);
	}
	getBookByTitle(title:string):Observable<IBook[]> {
		return this.http.get<IBook[]>(SEARCH_BOOK_BY_TITLE_URL + title);
	}
	deleteBook(isbn:string) {
		this.http.delete(DELETE_BOOK_URL + isbn).subscribe();
	}
}
