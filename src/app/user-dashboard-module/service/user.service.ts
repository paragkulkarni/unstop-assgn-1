import { Injectable } from '@angular/core';
import { userInfo } from '../models/user.model.interface';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList = new BehaviorSubject<any>([
    {
      name: 'Amol',
      email: 'amol@gmail.com',
      role: 'admin',
    },
    {
      name: 'Anmol',
      email: 'anmol@gmail.com',
      role: 'editor',
    },
    {
      name: 'Ravi',
      email: 'ravi@gmail.com',
      role: 'viewer',
    },
  ]);
  userData = this.userList.asObservable();
  constructor() {}

  sendUser(data: any) {
    console.log(this.userList.value);
    return this.userList.next([...this.userList.getValue(), data]);
  }

  getData() {
    return this.userData;
  }
}
