import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { USER_LOGIN_URL, USER_UPDATE_URL } from '../shared/models/constants/urls';
import { User } from '../shared/models/User';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
	public userObservable:Observable<User>;
	constructor(private http:HttpClient,private toastrService:ToastrService) {
		this.userObservable = this.userSubject.asObservable();
	}
	public get currentUser():User {
		return this.userSubject.value;
	}
	login(userLogin:IUserLogin):Observable<User> {
		return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
			tap({
				next: (user) => {
					this.setUserToLocalStorage(user);
					this.userSubject.next(user);
					this.toastrService.success(
						`Now logged in as ${user.name}`,
						"Login Successful"
					)
				},
				error: (errorResponse) => {
					this.toastrService.error(errorResponse.error,'Login Failed')
				}
			})
		);
	}
	logout() {
		this.userSubject.next(new User());
		localStorage.removeItem(USER_KEY);
		window.location.reload();
	}
	updateUser(user:User):Observable<User> {
		this.setUserToLocalStorage(user);
		return this.http.put<User>(USER_UPDATE_URL,user);
	}
	private setUserToLocalStorage(user:User) {
		localStorage.setItem(USER_KEY,JSON.stringify(user));
	}
	private getUserFromLocalStorage():User {
		const userJson = localStorage.getItem(USER_KEY);
		if(userJson) return JSON.parse(userJson) as User;
		return new User();
	}
}
