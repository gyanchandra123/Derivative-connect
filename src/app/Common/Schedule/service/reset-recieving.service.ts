import { Injectable } from '@angular/core';
import { RessetsModel } from '../model/ressets-model';

@Injectable({
  providedIn: 'root'
})
export class ResetRecievingService{

  _insertResetsList: RessetsModel[] = [
    { quoteDate:'22/02/2013', rate: 0.00062375, rateIndexType: 'IRRATE', rateSettingType: 'RATESET', resetStartDate:'22/02/2013',resetEndDate:'22/08/2013'},
    { quoteDate: '22/08/2013', rate: 0.0059250, rateIndexType: 'IRRATE', rateSettingType: 'RATESET', resetStartDate:'22/08/2013',resetEndDate:'24/02/2014'},
    { quoteDate: '24/02/2014', rate: 0.0060243, rateIndexType: 'IRRATE', rateSettingType: 'RATESET', resetStartDate:'24/02/2014',resetEndDate:'22/08/2014'},
  ];

  constructor() { }

  /* addInsertRows(listToBeinserted: RessetsModel) {
    this._insertResetsList.push(listToBeinserted);
  } */

  /*  removeInsertedRows(enteredPeriod: number) {
     const toBeRemovedRow = this._insertResetsList.findIndex(c => c.CompoundingPeriod === enteredPeriod);
     this._insertResetsList.splice(toBeRemovedRow, 1);
 
   } */

  getAllInsertedRows() {
    return this._insertResetsList;
  }
}
