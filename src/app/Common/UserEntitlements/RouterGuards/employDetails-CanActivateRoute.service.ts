//Before 

/* import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { EmployeeDetailsComponent } from '../employee/employee-details/employee-details.component';
import { Injectable } from '@angular/core';
import { EmployService } from '../shared/employee.service';


@Injectable()
export class employDetailsCanActivateRouteService implements CanActivate {

    constructor(private _employService: EmployService,
        private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const employExists = !!this._employService.getEmployee(+route.paramMap.get('id'));

        if (employExists) {
            return true;
        }

        else {

            this._router.navigate(['/pageNotFound'])
            return false;
        }



    }

} */

//AFTER :-

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EmployService } from '../shared/employee.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class employDetailsCanActivateRouteService implements CanActivate {

    constructor(private _employService: EmployService,
        private _router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

        return this._employService.getEmployee(+route.paramMap.get('id'))

            //converting observable type:Boolean

            .pipe(map(employee => {
                const employExists = !!employee;

                if (employExists) {
                    return true;
                }

                else {

                    this._router.navigate(['/pageNotFound'])
                    return false;
                }


            }),
                catchError((err) => {

                    this._router.navigate(['/UserEntitlement/pageNotFound'])
                    console.log('GUARD CHECK :',err);                    
                    return of(false);
                })
            )







    }

}