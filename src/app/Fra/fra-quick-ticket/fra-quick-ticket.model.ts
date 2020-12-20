import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})
export class FraQuickticketModel{
    cmbQCurrency:any;
    txtQNotional:any;
    txtQAgreedRatePnl:any;
    cmbQBuySell:any;
    txtQTenor:any;
    txtQStartDate:any;
    txtQEndDate:any;
}