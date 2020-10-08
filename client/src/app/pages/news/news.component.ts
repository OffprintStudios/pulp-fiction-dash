import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ClientUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  currentUser: ClientUser;
  toggleForm: boolean = false;
  loadingForm: boolean = false;

  searchForm = new FormGroup({
    query: new FormControl('')
  });

  constructor(private authService: AuthService, public route: ActivatedRoute) {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
    });
  }

  ngOnInit(): void {
  }

  toggleNewsForm() {
    if (this.toggleForm === true) {
      this.toggleForm = false;
    } else {
      this.toggleForm = true;
    }
  }
}
