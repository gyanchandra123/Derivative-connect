import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CreateEmployeeComponent } from '../Profile-Modify/Profile-Modify.component';

@Injectable()
export class createEmployCanDeActivateRouterGuardSerice implements CanDeactivate<CreateEmployeeComponent>{

    canDeactivate(component: CreateEmployeeComponent): boolean {

        if (component.createEmployForm.dirty) {

            return confirm('Are you aure you wanna leave?');
        }
        return true;
    }

}