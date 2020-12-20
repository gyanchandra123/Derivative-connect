import { Injectable } from '@angular/core';

@Injectable(
    {
        providedIn:'root'
    }
)

export class PaymentModel{

 cmbDayCount:any;
 cmbDiscountCurve:any;
 cmbPayBusDay:any;
 cntPayCalendars:any;
 cmbPayFreq:any;
 cmbPayMarching:any;
 cmbPaymentConvention:any;
 cmbPaymentConversionCurrency:any;
 cmbPaymentConversionIndex:any;
 txtPaymentConversionLag:any;
 cmbPayRollDay:any;
 cmbPayRollWeek:any;
 txtPayLag:any;

 txtPV:any;
 cmbPVCurrency:any;
 txtRecParallelDelta:any;
 cmbCurvePnl:any;


}