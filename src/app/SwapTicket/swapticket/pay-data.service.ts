import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PayFieldValues } from './pay-field-values';

@Injectable({
  providedIn: 'root'
})



export class PayDataService 
{

  payFieldValues=new PayFieldValues();
  constructor() { }

  private payDataSource = new BehaviorSubject(this.payFieldValues);
  payCurrentData = this.payDataSource.asObservable();

  payChangeData(message: PayFieldValues) {
    this.payDataSource.next(message);
  }
  
}
