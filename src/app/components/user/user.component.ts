import { Component, OnInit } from '@angular/core';
import { MockUser } from '../mock-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  loggedIn = true;
  user = MockUser;

  constructor() { }

  ngOnInit(): void {
  }

}
