import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { UserService } from './user.service';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	user!:User;
	constructor(private userService:UserService) {
		userService.userObservable.subscribe((newUser) => {
			this.user = newUser;
		})
	}
	public isAuth():boolean {
		if(!this.user.token) return false;
		return true;
	}
}
