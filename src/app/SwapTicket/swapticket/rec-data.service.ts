import { Injectable } from '@angular/core';
import { RecFieldValues } from './rec-field-values'; 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecDataService {

  recFieldValuesObject= RecFieldValues.getInstance();

  constructor() { }

  private dataSource = new BehaviorSubject(this.recFieldValuesObject);
  currentModelData = this.dataSource.asObservable();

  changeData(message: RecFieldValues) { 
    console.log("from service:"+message.recievedTenor);
    this.dataSource.next(message);
  }
}
