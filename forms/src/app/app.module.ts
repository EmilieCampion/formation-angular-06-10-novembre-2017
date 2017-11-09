import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { LoginreactiveformComponent } from './loginreactiveform/loginreactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    LoginreactiveformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
