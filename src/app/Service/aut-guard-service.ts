import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()

export class AutGuardService implements CanActivate{

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (sessionStorage.getItem('token') != null) {
            return true;
        }
        else {
            this.router.navigate(['/login'], {
                queryParams: {
                    return: state.url
                }
            });
            return false;
        }
    }
}
