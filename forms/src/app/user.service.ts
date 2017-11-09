import { IUser } from './types/IUser.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  user: IUser = {login: 'Gilles', password: 'test'};
  constructor() {
    this.user = {login: 'Gilles', password: 'test'};
  }
  signInUser(user: IUser): boolean {
    return (user.login === this.user.login && user.password === this.user.password);
  }
}
