import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientUser } from 'src/app/models/user';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.less']
})
export class QueueComponent implements OnInit {
  currentUser: ClientUser;

  searchForm = new FormGroup({
    query: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
