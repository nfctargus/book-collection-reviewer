import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/shared/models/Book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	books:Book[] = [];
	constructor(private bookService:BookService) {
		this.books = bookService.getAllBooks();
	}
}
