import {Injectable} from '@angular/core';
@Injectable(
    {providedIn:'root'}
)
export class SwapAmortisationModel{

    cmbPayAmortType:string;
    txtPayAmortStartDate:string;
    txtPayAmortEndDate:string;
    cmbPayAmortBusDay:string;
    cntPayAmortCalendars:string;
    cmbPayAmortFreq:string;
    cmbPayAmortMarching:string;
    cmbPayAmortRollDay:string;
    cmbPayAmortRollWeek:string;
    txtPayAmortAmount:string;

    cmbRecAmortType:string;
    txtRecAmortStartDate:string;
    txtRecAmortEndDate:string;
    cmbRecAmortBusDay:string;
    cntRecAmortCalendars:string;
    cmbRecAmortFreq:string;
    cmbRecAmortMarching:string;
    cmbRecAmortRollDay:string;
    cmbRecAmortRollWeek:string;
    txtRecAmortAmount:string;

}