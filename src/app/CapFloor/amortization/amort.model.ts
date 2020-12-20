import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn:'root'
    }
)

export class AmortModel{
    cmbAmortType:any;
    txtAmortStartDate:any;
    txtAmortEndDate:any;
    cmbAmortBusDay:any;
    cntAmortCalendars:any;
    cmbAmortFreq:any;
    cmbAmortMarching:any;
    cmbAmortRollDay:any;
    cmbAmortRollWeek:any;
    txtAmortAmount:any;
    txtPV:any;
    cmbPVCurrency:any;
    txtRecParallelDelta:any;
    cmbCurvePnl:any;
}