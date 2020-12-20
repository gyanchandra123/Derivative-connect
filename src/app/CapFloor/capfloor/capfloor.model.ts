import { Injectable } from '@angular/core';

@Injectable({
    providedIn:'root'
})

export class CapFloorModel{
    cmbCurrency:any;
    txtTenor:any;
    txtNotional:any;
    cmbCfSubType:any;
    txtCapsStartDate:any;
    txtCapsEndDate:any;
    cmbStartDateRollFlag:any;
    cmbEndDateRollFlag:any;
    txtStartStubDate:any;
    txtBackStubDate:any;
    txtFrontStubManualRate:any;
    txtBackStubManualRate:any;
    cmbBuyFlag:any;
    cmbCapFloorType:any;
    


} 