import { Component, EventEmitter, Input, OnInit, AfterViewInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { NewspostForm } from 'src/app/models/news';
import { NewsService } from 'src/app/services/contrib';

@Component({
  selector: 'newspost-form',
  templateUrl: './newspost-form.component.html',
  styleUrls: ['./newspost-form.component.less']
})
export class NewspostFormComponent implements OnInit, AfterViewInit {
  @Input() toggle: boolean = false;
  @Input() isEditing: boolean;
  @Output() onOpening = new EventEmitter<boolean>();
  @Output() onSubmit = new EventEmitter<boolean>();
  @Output() onCancel = new EventEmitter<boolean>();

  postForm = new FormGroup({
    title: new FormControl(''),
    desc: new FormControl(''),
    body: new FormControl(''),
    category: new FormControl([])
  });

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.onOpening.emit(true);
  }

  ngAfterViewInit(): void {
    this.onOpening.emit(false);
  }
}
