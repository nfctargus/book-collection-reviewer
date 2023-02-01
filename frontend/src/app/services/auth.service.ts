import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../shared/models/User';
import { UserService } from './user.service';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	user!:User;
	constructor(public jwtHelper:JwtHelperService,private userService:UserService) {
		userService.userObservable.subscribe((newUser) => {
			this.user = newUser;
		})
	}

	/* public isAuth():boolean {
		const token = localStorage.getItem(USER_KEY);
		return !this.jwtHelper.isTokenExpired(token);
	} */

	public isAuth():boolean {
		alert(this.user.token)
		if(!this.user.token) return false;
		return true;
	}
}
