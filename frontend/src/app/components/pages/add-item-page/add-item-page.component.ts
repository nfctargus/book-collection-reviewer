import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookService } from 'src/app/services/book.service';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

export interface StepType {
	label: string;
	fields: FormlyFieldConfig[];
  }
  
@Component({
	selector: 'app-add-item-page',
	templateUrl: './add-item-page.component.html',
	styleUrls: ['./add-item-page.component.css']
})
export class AddItemPageComponent {
	@Input()
	isbn:string = '';
	@Input()
	title:string = '';
	@Input()
	author:string = '';
	@Input()
	searchResults:String[] = [];

	page = 1;

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
	lookupBooksByTitle(title:string) {
		if(title.length > 3) {
			this.bookService.getBookByTitle(title).subscribe((data) => {
				this.searchResults = data;
				alert(JSON.stringify(this.searchResults))
			});
		}
		else {
			return
		}
	}
	nextPage() {
		this.page+=1;
	}
	prevPage() {
		this.page-=1;
	}

	

}
