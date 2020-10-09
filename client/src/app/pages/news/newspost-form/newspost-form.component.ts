import { Component, EventEmitter, Input, OnInit, AfterViewInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { NewspostForm, NewsCategory } from 'src/app/models/news';
import { NewsService } from 'src/app/services/contrib';

@Component({
  selector: 'newspost-form',
  templateUrl: './newspost-form.component.html',
  styleUrls: ['./newspost-form.component.less']
})
export class NewspostFormComponent implements OnInit {
  categories = NewsCategory;

  postForm = new FormGroup({
    title: new FormControl(''),
    desc: new FormControl(''),
    body: new FormControl(''),
    category: new FormControl([])
  });

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
  }
}
