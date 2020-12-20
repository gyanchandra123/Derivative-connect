import { Injectable } from '@angular/core';
import { InsertSwapModel } from '../model/insert-swap-model';
 

@Injectable({
  providedIn: 'root'
})

export class InsertSwapService {

  _insertList:InsertSwapModel[] = [
    {couponStartDate:'27/09/2013', amount:61986.30, couponEndDate:'27/03/2014', paymentDate:'27/03/2014', periodRate:0.0125000, notional: 10000000,settlementPeriod:6,CompoundingPeriod:6,amortizationPeriod:6,totalPVAmount: 248189.44,totalPaymentAmount:250342.47},
    {couponStartDate:'27/03/2014', amount: 63698.63, couponEndDate:'29/09/2014', paymentDate:'29/09/2014', periodRate:0.0125000, notional: 10000000,settlementPeriod:6,CompoundingPeriod:6,amortizationPeriod:6,totalPVAmount:64599999,totalPaymentAmount:869999999},
    {couponStartDate:'29/09/2014', amount: 61301.37, couponEndDate:'27/03/2015', paymentDate:'27/03/2015', periodRate:0.0125000, notional: 10000000,settlementPeriod:6,CompoundingPeriod:6,amortizationPeriod:6,totalPVAmount:64599999,totalPaymentAmount:869999999},
    {couponStartDate:'27/03/2015', amount: 63356.16, couponEndDate:'28/09/2015', paymentDate:'28/09/2015', periodRate:0.0125000, notional: 10000000,settlementPeriod:6,CompoundingPeriod:6,amortizationPeriod:6,totalPVAmount:64599999,totalPaymentAmount:869999999},
    {couponStartDate:'28/09/2015', amount: 63356.16, couponEndDate:'28/03/2016', paymentDate:'28/03/2016', periodRate:0.0125000, notional: 10000000,settlementPeriod:6,CompoundingPeriod:6,amortizationPeriod:6,totalPVAmount:64599999,totalPaymentAmount:869999999},
    {couponStartDate:'28/03/2016', amount: 63356.16, couponEndDate:'28/09/2016', paymentDate:'28/09/2016', periodRate:0.0125000, notional: 10000000,settlementPeriod:6,CompoundingPeriod:6,amortizationPeriod:6,totalPVAmount:64599999,totalPaymentAmount:869999999},
  ];
  insertModel: any;
  constructor() {}

  /* addInsertRows(listToBeinserted: InsertSwapModel) {
    this._insertList.push(listToBeinserted);
  }

  removeInsertedRows(enteredPeriod: number) {
    const toBeRemovedRow = this._insertList.findIndex(c => c.CompoundingPeriod === enteredPeriod);
    this._insertList.splice(toBeRemovedRow, 1);

  } */

  getAllInsertedRecieverRows() {
    return this._insertList;
  }
  
}
