import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ROLES } from '../../../constants';

@Injectable({
  providedIn: 'root'
})
class AuthGuardService {

  constructor(public jwtHelper: JwtHelperService, public router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("*************Authentication Guard Activated********************");
    const token = localStorage.getItem('token') as string;
    // console.log(token);
    if (token != null && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken: any = this.jwtHelper.decodeToken(token);
      const { firstName, lastName, roles, sub } = decodedToken;
      if (roles.includes(ROLES.ROLE_ADMIN)) {
        this.router.navigate(['/admin/home']);
      } else {
        this.router.navigate(['/dashboard/home']);
      }
      return false;
    }
    return true;
  }
}
export const AuthGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuardService).canActivate(route, state);
};