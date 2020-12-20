import {Injectable} from '@angular/core';

 @Injectable({
     providedIn: 'root'
 })


export class RecFieldValues {

    recievedStatus:any;
    recievedTenor:any;
    recievedNotional:any;
    recievedCouponStartDate:any;
    recievedCouponEndDate:any;
    recievedFixedQuote:any;
    recievedDayCount:any;
    recievedAccuralFreq:any;
    
    /* settlementPeriod:any;
    CompoundingPeriod:any;
    amortizationPeriod:any;
    totalPVAmount:any;
    totalPaymentAmount:any;
    periodRate:any;
    amount:any; */


    private static instance: RecFieldValues;
 
        private constructor() {}
 
        static getInstance() {
            if (this.instance === null || this.instance === undefined) {
                this.instance = new RecFieldValues();
            }
            return this.instance;
        }
}
