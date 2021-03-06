import { passwordValidator } from '../validators/password.validator';
import { UserService } from '../user.service';
import { IUser } from '../types/IUser.interface';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, Validator, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean;
  login: AbstractControl;
  password: AbstractControl;
  myForm: FormGroup;

  constructor(formBuilder: FormBuilder, private userService: UserService) {
    this.isLoggedIn = false;
    this.myForm = formBuilder.group({
        login: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
        password: ['', Validators.compose([Validators.required, passwordValidator])]
      });
    this.login = this.myForm.controls['login'];
    this.password = this.myForm.controls['password'];
   }

  ngOnInit() {
  }

  onSubmit(value: IUser) {
    if (this.myForm.valid) {
      this.isLoggedIn = this.userService.signInUser(value);
      this.myForm.reset();
    }
  }

}
