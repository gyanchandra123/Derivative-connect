import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class FrasModel{
    cmbCurrency:any;
    txtNotional:any;
    txtAgreedRate:any;
    cmbFraBuySell:any;
    cmbRateType:any;
    txtTenor:any;
    txtStartDate:any;
    txtMaturityDate:any;
    txtQuoteDate:any;
    cntQuoteCalendars:any;
    txtQuoteLag:any;
    txtSettlementDate:any;
    cmbDayCount:any;
    cmbDiscountCurve:any;
    cmbMarketIndex:any;
    cmbPayBusDay:any;
    cntPayCalendars:any;
    cmbPaymentConvention:any;
    cmbResetConvention:any;
    txtFWDRate:any;
    cmbRateSettingType:any;
    cmbResetType:any;
    txtPrecision:any;
    txtPV:any;
    cmbPVCurrency:any;
    txtRecParallelDelta:any;
    cmbCurve:any;
}