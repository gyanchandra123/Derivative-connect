import { Injectable } from '@angular/core';
import { StubResetsModel } from '../model/stub-resets-model';

@Injectable({
  providedIn: 'root'
})
export class StubResetService{
 
  _stubResetList: StubResetsModel[] = [
    {stubType:'F StubA',quoteId:'GBPDOM_1M.3750',quote:'15/10/10',reset:'15/10/10',resetRate:0.57125,resetType:'H'},
    {stubType:'F StubB',quoteId:'GBPDOM_2M.3750',quote:'15/10/10',reset:'15/10/10',resetRate:0.62775,resetType:'H'},
    
  ];
  constructor() { }

 /*  addInsertRows(listToBeinserted: StubResetsModel) {
    this._stubResetList.push(listToBeinserted);
  } */

  /* removeInsertedRows(enteredPeriod: number) {
    const toBeRemovedRow = this._stubResetList.findIndex(c => c.CompoundingPeriod === enteredPeriod);
    this._stubResetList.splice(toBeRemovedRow, 1);

  } */

  

  getAllInsertedRows() {
    return this._stubResetList;
  }
}

