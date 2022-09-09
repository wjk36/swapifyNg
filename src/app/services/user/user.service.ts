import { Injectable } from '@angular/core';
import { MockUser } from '../../mock-user';
import { User } from '../../components/user/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  getUser(): Observable<User> {
    const user = of(MockUser);
    return user;
  }
}
