import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private _loading: boolean = false;
  loadingStatus: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  get loadState(): boolean {
    return this._loading;
  }

  set loadState(value: boolean) {
    this._loading = value;
    this.loadingStatus.next(value);
  }

  startLoading() {
    this._loading = true;
  }

  stopLoading() {
    this._loading = false;
  }
}
