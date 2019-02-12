import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './core/login.service';
import { EditFruitsComponent } from './parent-child/edit-fruits/edit-fruits.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(
    private lS: LoginService,
    private router:Router
  ) { }

  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      return this.lS.isLoggedIn().then(
          (result:boolean)=>{
            if (result === true){
              return true;
            // } else if (route.routeConfig.path === 'edit') {
            //  return true;
            } else if(route.component===EditFruitsComponent) {
              return true;
            } else{
              route.params
              this.router.navigate(['/']);
              //return false
            }
          });

  }

  canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
    return this.lS.isLoggedInObservable();
  }






}
