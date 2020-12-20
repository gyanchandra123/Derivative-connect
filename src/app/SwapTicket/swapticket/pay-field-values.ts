import { Injectable } from '@angular/core';

@Injectable(
    { providedIn: 'root' }
)


export class PayFieldValues {

    payStatus: any;
    payTenor: any;
    payNotional: any;
    payCouponStartDate: any;
    payCouponEndDate: any;
    payFixedQuote: any;
    payDayCount: any;
    payAccuralFreq: any;
}
