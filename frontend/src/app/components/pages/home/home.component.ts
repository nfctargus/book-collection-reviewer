import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';
import { Book } from 'src/app/shared/models/Book';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	books:Book[] = [];
	user:User = this.userService.currentUser;

	constructor(private bookService:BookService,activatedRoute:ActivatedRoute,private userService:UserService) {
		let booksObservable:Observable<Book[]>;
		let userObservable:Observable<User>;
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
			this.user = this.userService.currentUser;
		})
	}

	public updateUserFavourite(isbn:string) {
		if(!isbn) return;
		if(this.user.favourites?.find((fav) => fav === isbn)) {
			this.user.favourites = this.user.favourites.filter((fav) => fav !== isbn)
			this.userService.updateUser(this.user).subscribe()
		}
		else {
			this.user.favourites?.push(isbn);
			this.userService.updateUser(this.user).subscribe()
		}
	}
	public isFav(isbn:string):boolean {
		if (this.user.favourites?.find((userFav) => userFav === isbn)) {
			return true;
		} else {
			return false;
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
