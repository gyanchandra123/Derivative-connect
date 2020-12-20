import { Injectable } from '@angular/core';

@Injectable(
   { providedIn:'root'}
)
export class SwapResetModel {

    cntPayQuoteCalender:any;
    txtPayQuoteLag:any; 
  
    cntPayInitialQuotePayCalendars:any;
    txtPayInitialIntialPayQuoteDate:any;
    txtPayIntialQuoteLag:any;
    cmbPayResetAveragins:any; 
    cmbPayResetConvention:any;
    txtPayRateCutOff:any;
    cmbPayResetBusDay:any;
    cmbPayResetFreq:any;
    cmbPayResetMarching:any;
    cmbPayResetPayRollDay:any;
    cmbPayResetRollWeek:any;
    cmbPayResetType:any;
    cmbPayMarketIndex:any;

    cntRecQuoteCalender:any;
    txtRecQuoteLag:any; 
   
    cntRecInitialQuotePayCalendars:any;
    txtRecIntialQuotePayDate:any;
    txtRecIntialcQuoteLag:any;
    cmbRecResetAveragins:any; 
    cmbRecResetConvention:any;
    txtRecRateCutOff:any;
    cmbRecResetBusDay:any;
    cmbRecResetFreq:any;
    cmbRecResetMarching:any;
    cmbRecResetPayRollDay:any;
    cmbRecResetRollWeek:any;
    cmbRecResetType:any;
    cmbRecMarketIndex:any;
}