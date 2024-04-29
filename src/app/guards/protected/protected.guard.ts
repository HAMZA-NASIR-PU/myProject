import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ROLES } from '../../../constants';
@Injectable({
  providedIn: 'root'
})
class ProtectedRouteGuard {



  constructor(public jwtHelper: JwtHelperService, public router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    console.log("*************Protedted Route Guard Activated********************");
    // console.log(this.router.url);
    // const decodedJwt = this.jwtHelper.decodeToken(token);
    // console.log(decodedJwt);
    if (token == null || this.jwtHelper.isTokenExpired(token)) {
      this.router.navigate(['']);
      return false;
    }
    const decodedToken: any = this.jwtHelper.decodeToken(token);
    const { firstName, lastName, roles, sub } = decodedToken;

    if (roles.includes(ROLES.ROLE_ADMIN)) {
      this.router.navigate(['/admin/home']);
      return false;
    }
    return true;
  }
}

export const ProtectedGuard: CanActivateFn = (route, state) => {
  return inject(ProtectedRouteGuard).canActivate(route, state);
};
