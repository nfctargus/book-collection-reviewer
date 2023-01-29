import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/shared/models/Book';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent {
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
}
