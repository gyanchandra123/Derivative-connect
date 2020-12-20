import {Injectable} from '@angular/core';
@Injectable(
    {providedIn:'root'}
)
export class SwapAmortisationModel{

    cmbPayAmortType:any;
    txtPayAmortStartDate:any;
    txtPayAmortEndDate:any;
    cmbPayAmortBusDay:any;
    cntPayAmortCalendars:any;
    cmbPayAmortFreq:any;
    cmbPayAmortMarching:any;
    cmbPayAmortRollDay:any;
    cmbPayAmortRollWeek:any;
    txtPayAmortAmount:any;

    cmbRecAmortType:any;
    txtRecAmortStartDate:any;
    txtRecAmortEndDate:any;
    cmbRecAmortBusDay:any;
    cntRecAmortCalendars:any;
    cmbRecAmortFreq:any;
    cmbRecAmortMarching:any;
    cmbRecAmortRollDay:any;
    cmbRecAmortRollWeek:any;
    txtRecAmortAmount:any;




}