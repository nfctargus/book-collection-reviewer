import { Injectable } from '@angular/core';
import { Book } from 'src/app/shared/models/Book';
import { HttpClient } from '@angular/common/http';
import { Category } from '../shared/models/Category';
import { Observable } from 'rxjs';
import { BOOKS_BY_SEARCH_URL, BOOKS_BY_CATEGORY_URL, BOOKS_ALL_CATEGORIES_URL, BOOKS_URL, BOOK_BY_ID_URL } from '../shared/models/constants/urls';

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
	setFavouritebyBookId(bookId:string,favourite:boolean){
		this.http.put<Book>(BOOK_BY_ID_URL + bookId,favourite);
	}
}
