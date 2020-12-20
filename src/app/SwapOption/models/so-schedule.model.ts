import { Injectable } from '@angular/core';

@Injectable(
   { providedIn:'root'}
)
export class SechduleModel {
    txtPayPV:any[];
    cmbPayPVCurrency:any[]; 
    txtPayParallelDelta:any[];
    cmbPayCurve:any[];
    txtRecPV:any[];
    cmbRecPVCurrency:any[]; 
    txtRecParallelDelta:any[];
    cmbRecCurve:any[];
} 