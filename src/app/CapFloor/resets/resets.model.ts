import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class ResetsModel{
    txtGearFactor:any;
    txtSpread:any;
    cntQuoteCalenders:any;
    txtQuoteLag:any;
    cntInitialQuoteCalenders:any;
    txtInitialQuoteDate:any;
    txtInitialQuoteLag:any;
    cmbResetAveraging:any;
    cmbResetConvention:any;
    cmbResetFreq:any;
    cmbResetType:any;
    cmbScheduleCustomFlag:any;
    txtStrike:any;
    txtValid:any;
    txtPricingMethod:any;
    cmbMarketIndex:any;

    txtPV:any;
    cmbPVCurrency:any;
    txtRecParallelDelta:any;
    cmbCurvePnl:any;

}