import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent} from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { LoggedInGuard } from './logged-in.guard';

const routes: Routes = [
  {path: '', redirectTo : 'home', pathMatch : 'full'},
  {path: 'home', component : HomeComponent},
  {path: 'about', component : AboutComponent},
  {path: 'login', component : LoginComponent},
  {path: 'protected', component : ProtectedComponent, canActivate: [LoggedInGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ProtectedComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoggedInGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
