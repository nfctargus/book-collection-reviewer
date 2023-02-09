import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/shared/models/Category';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
	searchTerm = '';
	categories?:Category[];
	catVisibility?:boolean = false;

	constructor(activatedRoute:ActivatedRoute,private router:Router,bookService:BookService) {
		activatedRoute.params.subscribe((params) => {
			if(params['searchTerm']) this.searchTerm = params['searchTerm'];
		})
		bookService.getAllCategories().subscribe(serverCats => {
			this.categories = serverCats;
		});
	}
	search(term:string):void {
		if(term)
		this.router.navigateByUrl('/search/' + term);
		
	}
	showCategories() {
		this.catVisibility = !this.catVisibility;
	}
}
