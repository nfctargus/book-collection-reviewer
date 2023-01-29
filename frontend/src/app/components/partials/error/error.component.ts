import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
	@Input()
	visible = false;
	@Input()
	errorMessage="Not Found";
	@Input()
	resetLinkText = "Reset";
	@Input()
	resetLinkRoute = "/";

	constructor() {

	}
}
