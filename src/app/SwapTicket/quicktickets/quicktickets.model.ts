import { Injectable } from '@angular/core';

@Injectable(
   { providedIn:'root'}
)
export class QuickTicketsModel {
    txtModStatus:any;
    cmbQPaySide:any;
    cmbQRecSide:any; 
    cmbQCurrency:any;
    txtQNotional:any;
    txtQTenor:any;
    txtQStartDate:any;
    txtEndDate:any;
}