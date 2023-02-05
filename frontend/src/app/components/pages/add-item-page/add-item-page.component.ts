import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/shared/interfaces/IBook';

@Component({
	selector: 'app-add-item-page',
	templateUrl: './add-item-page.component.html',
	styleUrls: ['./add-item-page.component.css']
})
export class AddItemPageComponent {
	@Input()
	selectedBookIsbn: string = '';
	@Input()
	title?:string = '';
	@Input()
	imageUrl?:string = '';
	@Input()
	matchingBooks:IBook[] = [];

	constructor(activatedRoute:ActivatedRoute,private bookService:BookService,private router:Router,private toastr: ToastrService) {
		activatedRoute.params.subscribe((params) => {
			if(params['isbn']) this.selectedBookIsbn = params['isbn'];
		})
	}
	addBookByIsbn() {
		this.bookService.addNewBookByIsbn(this.selectedBookIsbn).pipe(
			(error => {
				return error;
			})
		).subscribe({complete: console.info});
	}

	lookupBooksByTitle(title:string) {
		if(title) {
			this.matchingBooks = [];
			this.bookService.getBookByTitle(title).subscribe(
				(data) => {
					data.forEach((book) => {
					this.matchingBooks.push(book);
				}),
				(error:any) => {
					console.log(error)
					console.log(error.type)
				}
			});
		} else {
			return
		}
	}
	selectChangeHandler (event: any) {
		this.selectedBookIsbn = event.target.value;
		const selectedBook:IBook[] = this.matchingBooks.filter(book => book.isbn === event.target.value)
		this.imageUrl = selectedBook.find((book) => book.isbn === this.selectedBookIsbn)?.imageUrl
		this.title = selectedBook.find((book) => book.isbn === this.selectedBookIsbn)?.title
	}
}
