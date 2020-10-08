import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';

import { ClientUser, LoginUser } from './models/user';
import { AuthService } from './services/auth';
import { LoadingService } from './services/util/loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Offprint Dashboard';

  currentUser: ClientUser;
  loadingLogin = false;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(false)
  });

  constructor(private authService: AuthService, private router: Router, private loadingService: LoadingService) {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
    });

    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  get loginFields() { return this.loginForm.controls; }

  navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loadingService.startLoading();
    } else if (event instanceof NavigationEnd) {
      this.loadingService.stopLoading();
    } else if (event instanceof NavigationCancel) {
      this.loadingService.stopLoading();
    } else if (event instanceof NavigationError) {
      this.loadingService.stopLoading();
    } else {
      this.loadingService.stopLoading();
    }
  }

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
