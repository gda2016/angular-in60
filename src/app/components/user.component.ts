import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  	<h1>Hello {{name}}</h1>
  	<p><strong>Email:</strong> {{email}}</p>
  	<p><strong>Address:</strong> {{address.street}} {{address.city}} {{address.state}}</p>
  	<div *ngIf = "showHobbies">
  		<h3>Hobbies</h3>
  		<ul>
  		<li *ngFor="let hobby of hobbies">
  			{{hobby}}
  		</li>
  		</ul>
  	</div>
  	`,
})
export class UserComponent  { 
	name: string; 
	email: string;
	address: address;
	hobbies: string[];
	showHobbies: boolean;

	constructor(){
		this.name = 'Jana'; 
		this.email = 'jana@gmail.com';
		this.address = {
			street: '1 Chevchenko Bv',
			city: 'Cherkasy',
			state: 'UA'
		}
		this.hobbies = ['Vine', 'Chees', 'iPhones'];
		this.showHobbies = false;
	}
}

interface address {
	street: string;
	city: string;
	state: string;
}