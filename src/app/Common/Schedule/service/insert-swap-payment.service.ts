import { Injectable } from '@angular/core';
import { InsertSwapModel } from '../model/insert-swap-model';
 

@Injectable({
  providedIn: 'root'
})
export class InsertSwapPaymentService {

  _insertPaymentList: InsertSwapModel[] = [
    { couponStartDate: '27/09/2013', amount: 26336.41, couponEndDate: '27/03/2014', paymentDate: '27/03/2014', periodRate: 0.00531, notional: 10000000, settlementPeriod: 6, CompoundingPeriod: 6, amortizationPeriod: 6, totalPVAmount: 163887.28, totalPaymentAmount: 165641.43 },
    { couponStartDate: '27/03/2014', amount: 31509.16, couponEndDate: '29/09/2014', paymentDate: '29/09/2014', periodRate: 0.00618, notional: 10000000, settlementPeriod: 6, CompoundingPeriod: 6, amortizationPeriod: 6, totalPVAmount: 64599999, totalPaymentAmount: 869999999 },
    { couponStartDate: '29/09/2014', amount: 38398.31, couponEndDate: '27/03/2015', paymentDate: '27/03/2015', periodRate: 0.00782, notional: 10000000, settlementPeriod: 6, CompoundingPeriod: 6, amortizationPeriod: 6, totalPVAmount: 64599999, totalPaymentAmount: 869999999 },
    { couponStartDate: '27/03/2015', amount: 69397.55, couponEndDate: '28/09/2015', paymentDate: '28/09/2015', periodRate: 0.01369, notional: 10000000, settlementPeriod: 6, CompoundingPeriod: 6, amortizationPeriod: 6, totalPVAmount: 64599999, totalPaymentAmount: 869999999 },
    { couponStartDate: '28/09/2015', amount: 69397.55, couponEndDate: '28/03/2016', paymentDate: '28/03/2016', periodRate: 0.01369, notional: 10000000, settlementPeriod: 6, CompoundingPeriod: 6, amortizationPeriod: 6, totalPVAmount: 64599999, totalPaymentAmount: 869999999 },
    { couponStartDate: '28/03/2016', amount: 69397.55, couponEndDate: '28/09/2016', paymentDate: '28/03/2016', periodRate: 0.01369, notional: 10000000, settlementPeriod: 6, CompoundingPeriod: 6, amortizationPeriod: 6, totalPVAmount: 64599999, totalPaymentAmount: 869999999 },
    
  ];
  insertModel: any;

  constructor() { }

  /* addInsertRows(listToBeinserted: InsertSwapModel) {
    this._insertPaymentList.push(listToBeinserted);
  }

  removeInsertedRows(enteredPeriod: number) {
    const toBeRemovedRow = this._insertPaymentList.findIndex(c => c.CompoundingPeriod === enteredPeriod);
    this._insertPaymentList.splice(toBeRemovedRow, 1);

  } */

   getAllInsertedPaymentRows() {
    return this._insertPaymentList;
  } 
}
