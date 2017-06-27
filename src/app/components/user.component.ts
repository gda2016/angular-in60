import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  	<h1>Hello {{name}}</h1>
  	<p><strong>Email:</strong> {{email}}</p>
  	<p><strong>Address:</strong> {{address.street}} {{address.city}} {{address.state}}</p>
  	`,
})
export class UserComponent  { 
	name = 'Jana'; 
	email = 'jana@gmail.com';
	address = {
		street: '1 Chevchenko Bv',
		city: 'Cherkasy',
		state: 'UA'
	}
}
