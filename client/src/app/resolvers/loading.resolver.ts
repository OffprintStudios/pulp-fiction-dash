import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingService } from '../services/util/loading';

@Injectable()
export class LoadingResolver implements Resolve<any> {
    constructor (private loadingService: LoadingService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
    }
}