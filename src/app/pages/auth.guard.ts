import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from '../main.service';

@Injectable({
  providedIn: 'root'
})
// https://stackblitz.com/edit/angular-permission-directive?file=app%2Fapp.component.html
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  permission: any;
  view: boolean;
  per: any;
  permission_list: any;
  can_view: any;

  constructor(
    private router: Router,
    private service: MainService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let page = route.data.page_name as Array<string>;
    return new Promise((resolve) => {
      setTimeout(() => {
      }, 2000);
    })

  }
  async get_can_view(page_name) {
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let page = childRoute.data.page_name as Array<string>;
    return new Promise((resolve) => {
      setTimeout(() => {
      }, 1500);
    })
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
