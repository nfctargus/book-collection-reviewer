import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/shared/models/Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	books:Book[] = [];
	constructor(private bookService:BookService,activatedRoute:ActivatedRoute) {
		let booksObservable:Observable<Book[]>;
		activatedRoute.params.subscribe((params) => {
			if(params['searchTerm']) {
				booksObservable = this.bookService.getAllBooksBySearchTerm(params['searchTerm']);
			} else if (params['category']) {
				booksObservable = this.bookService.getAllBooksByCategory(params['category']);
			} else {
				booksObservable = bookService.getAllBooks();
			}
			booksObservable.subscribe((serverBooks) => {
				this.books = serverBooks;

			})
		})
	}
	public updateFavourite(bookId:string) {
		const bookToUpdate = this.books.find((book) => book.id === bookId);
		
		if(bookToUpdate) {
			bookToUpdate.favourite = !bookToUpdate.favourite;
			this.bookService.updateBookbyBookId(bookId,bookToUpdate)
		}		
	}
	public changeRating(bookId:string,newRating:number) {
		const bookToUpdate = this.books.find((book) => book.id === bookId);
		
		if(bookToUpdate) {
			bookToUpdate.stars = newRating;
			this.bookService.updateBookbyBookId(bookId,bookToUpdate);
		}
	}
	
	
}
