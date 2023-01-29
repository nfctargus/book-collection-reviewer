import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
	user!:User;

	constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) {
		userService.userObservable.subscribe((newUser) => {
			this.user = newUser;
		})
	}

	logout() {
		this.userService.logout();
		this.router.navigateByUrl("");
	}
	get isAuth() {
		return this.user.token;
	}
}
