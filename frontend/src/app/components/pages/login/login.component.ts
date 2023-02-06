import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;
	isSubmitted = false;
	user!:User;
	returnUrl = '';

	constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) {
		userService.userObservable.subscribe((newUser) => {
			this.user = newUser;
		})
	}
	ngOnInit():void {
		this.loginForm = this.formBuilder.group({
			email:['',[Validators.required,Validators.email]],
			password:['',Validators.required]
		})
	}

	get fc() {
		return this.loginForm.controls;
	}
	submit() {
		this.isSubmitted = true;
		if(this.loginForm.invalid) return;

		this.userService.login({email:this.fc['email'].value,password:this.fc['password'].value}).subscribe(()=> {
			this.router.navigateByUrl('/');
		});
	}
	logout() {
		this.userService.logout();
	}
	get isAuth() {
		return this.user.token;
	}
}
