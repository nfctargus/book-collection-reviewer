import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
	selector: 'app-threedbox',
	templateUrl: './threedbox.component.html',
	styleUrls: ['./threedbox.component.css']
})
export class ThreedboxComponent {
	@Input()
	message1="";
	@Input()
	message2 = "";
	@Input()
	isStatic = true;

	user!:User;
	constructor(private userService:UserService,private router:Router) {
		userService.userObservable.subscribe((newUser) => {
			this.user = newUser;
		})
	}
	buttonClicked() {
		if(this.user.token) {
			this.userService.logout();
			this.router.navigateByUrl("/");
		} else {
			this.router.navigateByUrl("/login");
		}
	}
}
