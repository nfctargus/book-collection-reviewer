import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';
import { IBook } from 'src/app/shared/interfaces/IBook';

@Component({
	selector: 'app-add-item-page',
	templateUrl: './add-item-page.component.html',
	styleUrls: ['./add-item-page.component.css']
})
export class AddItemPageComponent implements OnInit{
	isSubmitted:boolean = false;
	matchingBooks:IBook[] = [];
	addItemForm!:FormGroup;

	constructor(activatedRoute:ActivatedRoute,private bookService:BookService,private router:Router,private toastr: ToastrService,private formBuilder:FormBuilder) {
		activatedRoute.params.subscribe((params) => {
			if(params['isbn']) this.fc['isbn'].setValue(params['isbn']);
		})
	}
	ngOnInit(): void {
		this.addItemForm = this.formBuilder.group({
			isbn:[''],
			title:[''],
			url:[''],
		})
	}
	get fc() {
		return this.addItemForm.controls
	}

	addBookByIsbn() {
		const isbn = this.fc['isbn'].value
		this.bookService.addNewBookByIsbn(isbn).pipe(
			(error => {
				return error;
			})
		).subscribe({complete: console.info});
		setTimeout(() => {
			this.router.navigateByUrl('/');
		},1500)
		
	}

	lookupBooksByTitle() {
		const title = this.fc['title'].value
		const isbn = this.fc['isbn'].value

		//If ISBN field has value, skip the search and just add the book
		if(isbn) {
			this.addBookByIsbn() 
		} else if(title) {
			this.matchingBooks = [];
			this.bookService.getBookByTitle(title).subscribe(
				(data) => {
					data.forEach((book) => {
					this.matchingBooks.push(book);
					this.isSubmitted = true;
				}),
				(error:any) => {
					console.log(error)
				}
			});
		} else {
			return
		}
	}
	selectChangeHandler (event: any) {
		this.fc['isbn'].setValue(event.target.value);
		const selectedBook:IBook[] = this.matchingBooks.filter(book => book.isbn === event.target.value)
		selectedBook.find((book) => {
			if(book.isbn === this.fc['isbn'].value) {
				this.fc['url'].setValue(book.imageUrl);
				this.fc['title'].setValue(book.title);
			}
		})
	}
	clearSearch() {
		this.fc['isbn'].setValue("");
		this.fc['title'].setValue("");
		this.fc['url'].setValue("");
		this.isSubmitted = false;
	}
}
