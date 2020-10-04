import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ClientUser, LoginUser } from './models/user';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'client';

  currentUser: ClientUser;
  loadingLogin = false;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(false)
  });

  constructor(private authService: AuthService) {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
    });
  }

  get loginFields() { return this.loginForm.controls; }

  submitLogin() {
    this.loadingLogin = true;
    const credentials: LoginUser = {
      email: this.loginFields.email.value,
      password: this.loginFields.password.value
    };

    this.authService.login(credentials).subscribe(() => {
      this.loadingLogin = false;
      this.loginForm.reset();
    }, () => {
      this.loadingLogin = false;
    });
  }

  logOut() {
    this.authService.logout();
  }
}
