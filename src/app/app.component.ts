import { Component } from '@angular/core';
import { User } from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-crash';

  user: User = {
    firstName: '',
    lastName: '',
    emailAddress: '',
  };

  users: User[] = [
    {
      firstName: 'Thomas',
      lastName: 'Chan',
      emailAddress: 'tchan@somewhere.com',
    },
    {
      firstName: 'Sam',
      lastName: 'Norman',
      emailAddress: 'sam@somewhere.com',
    },
  ];

  onSave() {
    this.users.push(this.user);
    // console.log(this.users)
  }
}
