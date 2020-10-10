import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
    title: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(36)]),
    desc: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    body: new FormControl('', [Validators.required, Validators.minLength(3)]),
    category: new FormControl(null, [Validators.required])
  });

  constructor(private newsService: NewsService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void { }

  get formFields() { return this.postForm.controls; }

  submitForm() {
    if (this.formFields.title.invalid) {
      this.snackBar.open(`Title must be between 3 and 36 characters.`);
      return;
    }

    if (this.formFields.desc.invalid) {
      this.snackBar.open(`Description must be between 3 and 50 characters.`);
      return;
    }

    if (this.formFields.body.invalid) {
      this.snackBar.open(`Post body cannot be empty.`);
      return;
    }

    if (this.formFields.category.invalid) {
      this.snackBar.open(`You must choose a category.`);
      return;
    }

    const formData: NewspostForm = {
      title: this.formFields.title.value,
      desc: this.formFields.desc.value,
      body: this.formFields.body.value,
      category: this.formFields.category.value
    };

    this.newsService.createNewspost(formData).subscribe(() => {
      this.snackBar.open(`Post saved successfully!`);
      this.router.navigate(['/news']);
    });
  }
}
