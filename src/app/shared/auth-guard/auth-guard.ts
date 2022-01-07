import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class RouteGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate() {
        let id = window.localStorage.getItem("id");

        if (id) {
            return true;
        }
        this.router.navigateByUrl('/login');
        return false;
    }
}
