import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClientUser } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
  currentUser: ClientUser;

  searchForm = new FormGroup({
    query: new FormControl('')
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
