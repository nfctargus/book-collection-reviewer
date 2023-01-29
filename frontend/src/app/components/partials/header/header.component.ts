import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	loginForm!:FormGroup;
	isSubmitted = false;

	constructor(private formBuilder:FormBuilder,private userService:UserService) {}
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

		this.userService.login({email:this.fc['email'].value,password:this.fc['password'].value})
	}
}
