import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';

@Component({
	selector: 'app-add-item-page',
	templateUrl: './add-item-page.component.html',
	styleUrls: ['./add-item-page.component.css']
})
export class AddItemPageComponent {
	@Input()
	isbn:string = '';

	constructor(activatedRoute:ActivatedRoute,private bookService:BookService,private router:Router,private toastr: ToastrService) {
		activatedRoute.params.subscribe((params) => {
			if(params['isbn']) this.isbn = params['isbn'];
		})
	}
	addBookByIsbn(isbn:string) {
		if(isbn) 
		this.bookService.addNewBookByIsbn(isbn)
		this.toastr.success(`Book with ISBN: ${isbn} has been added!!`, 'Successfully Added');
		this.router.navigateByUrl("/");
	}
}
