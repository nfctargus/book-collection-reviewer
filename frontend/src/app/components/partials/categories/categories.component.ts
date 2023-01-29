import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Category } from 'src/app/shared/models/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
	categories?:Category[];
	catVisibility?:boolean = false;

	constructor(bookService:BookService) {
		bookService.getAllCategories().subscribe(serverCats => {
			this.categories = serverCats;
		});
	}

	showCategories() {
		this.catVisibility = !this.catVisibility;
	}
}
