import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ClientUser } from 'src/app/models/user';
import { NewsDocument } from 'src/app/models/news';
import { AuthService } from 'src/app/services/auth';
import { NewsService } from 'src/app/services/contrib';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  currentUser: ClientUser;
  toggleForm: boolean = false;
  loadingForm: boolean = false;

  posts: NewsDocument[];

  searchForm = new FormGroup({
    query: new FormControl('')
  });

  constructor(private newsService: NewsService, private authService: AuthService, public route: ActivatedRoute) {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
    });

    this.fetchData();
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

  private fetchData() {
    this.newsService.fetchAll().subscribe(data => {
      this.posts = data;
    });
  }
}
