import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/util/loading';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less']
})
export class LoadingComponent implements OnInit, OnDestroy {
  loading: boolean = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.loadingStatus.pipe(debounceTime(200))
      .subscribe(val => {
        this.loading = val;
        console.log(val);
      });
  }

  ngOnDestroy(): void {
  }
}
