import {Injectable} from '@angular/core';
@Injectable(
    {providedIn:'root'}
)
export class SwapPaymentModel{
cmbPayPayBusDay:any[];
cntPayPayCalendars:any[];
cmbPayPayFreqPnl:any[];
cmbPayPayMarching:any[];
cmbPayPaymentConvention:any[];
cmbPayPaymentConversionCurrency:any[];
cmbPayPaymentConversionIndex:any[];
txtPayPaymentConversionLag:string;
cmbPayPayRollDay:any[];
cmbPayRollWeek:any[];
txtPayLag:string;

cmbRecPayBusDay:any[];
cntRecPayCalendars:any[];
cmbRecPayFreqPnl:any[];
cmbRecPayMarching:any[];
cmbRecPaymentConvention:any[];
cmbRecPaymentConversionCurrency:any[];
cmbRecPaymentConversionIndex:any[];
txtRecPaymentConversionLag:string;
cmbRecPayRollDay:any[];
cmbRecRollWeek:any[];
txtRecLag:string;


    
}