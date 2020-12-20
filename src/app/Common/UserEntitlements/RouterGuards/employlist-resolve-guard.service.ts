import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployService } from '../shared/employee.service';
import { Employee } from '../model/employee.model';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';


@Injectable()
export class EmploylistResolveGuardService implements Resolve<Employee[] | string>{

    constructor(private _employService: EmployService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee[] | string> {

        return this._employService.getEmployees().pipe(
            catchError((error: string) => of(error)));
    }

}