import { Component } from '@angular/core';
import { Book } from 'src/app/shared/models/Book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/shared/models/Category';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
	book!:Book;
	categories?:string[];
	user:User = this.userService.currentUser;
	constructor(activatedRoute:ActivatedRoute,private bookService:BookService,private router:Router,private userService:UserService) {

		activatedRoute.params.subscribe((params) => {
			if(params['id']) {
				bookService.getBookById(params['id']).subscribe(serverBooks => {
					this.book = serverBooks;
					this.categories = serverBooks.categories
				});
			}
		})
		this.user = this.userService.currentUser;
	}

	toggleFavourite(bookId:string) {
		//alert(bookId)
	}
	deleteBook() {
		const bookIsbn = this.book.isbn;
		this.bookService.deleteBook(bookIsbn);
		alert("Book with ISBN: " + bookIsbn + " has been deleted.")
		this.router.navigateByUrl("/")
	}
	public isFav(isbn:string):boolean {
		if (this.user.favourites?.find((userFav) => userFav === isbn)) {
			return true;
		} else {
			return false;
		}
	}
}
