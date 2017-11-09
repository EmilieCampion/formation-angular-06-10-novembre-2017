import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class LoginformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(form: IUser): boolean {
    console.log(form);
    return false;
  }

}

export interface IUser {
  login: string;
  password: string;
}
