import { Component } from '@angular/core';
import { Book } from 'src/app/shared/models/Book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/shared/models/Category';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
	book!:Book;
	categories?:string[];
	constructor(activatedRoute:ActivatedRoute,private bookService:BookService) {

		activatedRoute.params.subscribe((params) => {
			if(params['id']) {
				bookService.getBookById(params['id']).subscribe(serverBooks => {
					this.book = serverBooks;
					this.categories = serverBooks.categories
				});
			}
		})
	}

	toggleFavourite(bookId:string) {
		alert(bookId)
	}
}
