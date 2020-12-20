import { BehaviorSubject } from 'rxjs';
import { capsModel } from './../capsmodel.model';
import { URL } from './../URL/URL';

import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { CapFloorModel } from '../capfloor/capfloor.model';
import { PaymentModel } from '../payments/payment.model';
import { ResetsModel } from '../resets/resets.model';
import { AmortModel } from '../amortization/amort.model';
import { QuickModel } from '../quickticket/quick.model';
import { TradeBasicModels } from '../tradebasic/tradebasic.model';
import { TradeAdditionalFieldsModel } from '../additional-fields/additional-fields.model';


@Injectable({
    providedIn:'root'
})

export class CapModelSavingService{
   
    urlRef=new URL;
    private _url:string=this.urlRef.url+'postcapfloor';

    private message=new BehaviorSubject('');



    currentMessage=this.message.asObservable();
  
   capFloor=new  CapFloorModel();
   payments=new  PaymentModel();
   resets=new ResetsModel();
   amort=new AmortModel();
   quickTicket=new QuickModel();
   tradeBasicCap=new TradeBasicModels();
   additionalFieldsCap=new TradeAdditionalFieldsModel();
   
   capsModel=new capsModel();



constructor(private _http:HttpClient){}

saveDataService(capsModel:capsModel){
 return  this._http.post(this._url,capsModel);
}

 httpOptions={
    headers:new HttpHeaders({
        'Content-Type':'application/json',        
    })
}


onSavingCapFloor(){

    this.capsModel=this.capFloor.cmbCurrency;
    this.capsModel=this.capFloor.txtTenor;
    this.capsModel=this.capFloor.txtNotional;
    this.capsModel=this.capFloor.cmbCfSubType;
    this.capsModel=this.capFloor.txtCapsStartDate;
    this.capsModel=this.capFloor.txtCapsEndDate;
    this.capsModel=this.capFloor.cmbStartDateRollFlag;
    this.capsModel=this.capFloor.cmbEndDateRollFlag;
    this.capsModel=this.capFloor.txtStartStubDate;
    this.capsModel=this.capFloor.txtBackStubDate;
    this.capsModel=this.capFloor.txtFrontStubManualRate;
    this.capsModel=this.capFloor.txtBackStubManualRate;
    this.capsModel=this.capFloor.cmbBuyFlag;
    this.capsModel=this.capFloor.cmbCapFloorType;

    
   

    this.capsModel=this.payments.cmbDayCount;
    this.capsModel=this.payments.cmbDiscountCurve;
    this.capsModel=this.payments.cmbPayBusDay;
    this.capsModel=this.payments.cntPayCalendars;
    this.capsModel=this.payments.cmbPayFreq;
    this.capsModel=this.payments.cmbPayMarching;
    this.capsModel=this.payments.cmbPaymentConvention;
    this.capsModel=this.payments.cmbPaymentConversionCurrency;
    this.capsModel=this.payments.cmbPaymentConversionIndex;
    this.capsModel=this.payments.txtPaymentConversionLag;
    this.capsModel=this.payments.cmbPayRollDay;
    this.capsModel=this.payments.cmbPayRollWeek;
    this.capsModel=this.payments.txtPayLag;

    this.capsModel=this.resets.txtGearFactor;
    this.capsModel=this.resets.txtSpread;
    this.capsModel=this.resets.cntQuoteCalenders;
    this.capsModel=this.resets.txtQuoteLag;
    this.capsModel=this.resets.cntInitialQuoteCalenders;
    this.capsModel=this.resets.txtInitialQuoteDate;
    this.capsModel=this.resets.txtInitialQuoteLag;
    this.capsModel=this.resets.cmbResetAveraging;
    this.capsModel=this.resets.cmbResetConvention;
    this.capsModel=this.resets.cmbResetFreq;
    this.capsModel=this.resets.cmbResetType;
    this.capsModel=this.resets.cmbScheduleCustomFlag;
    this.capsModel=this.resets.txtStrike;
    this.capsModel=this.resets.txtValid;
    this.capsModel=this.resets.txtPricingMethod;
    this.capsModel=this.resets.cmbMarketIndex;
  

    this.capsModel=this.amort.cmbAmortType;
    this.capsModel=this.amort.txtAmortStartDate;
    this.capsModel=this.amort.txtAmortEndDate;
    this.capsModel=this.amort.cmbAmortBusDay;
    this.capsModel=this.amort.cntAmortCalendars;
    this.capsModel=this.amort.cmbAmortFreq;
    this.capsModel=this.amort.cmbAmortMarching;
    this.capsModel=this.amort.cmbAmortRollDay;
    this.capsModel=this.amort.cmbAmortRollWeek;
    this.capsModel=this.amort.txtAmortAmount;


    this.capsModel=this.quickTicket.cmbQCurrency;
    this.capsModel=this.quickTicket.txtNotionals;
    this.capsModel=this.quickTicket.txtQTenor;
    this.capsModel=this.quickTicket.txtQStartDate;
    this.capsModel=this.quickTicket.txtQEndDate;
   
    
    this.capsModel=this.tradeBasicCap.productClass;
    this.capsModel=this.tradeBasicCap.trader;
    this.capsModel=this.tradeBasicCap.effectiveDate;
    this.capsModel=this.tradeBasicCap.firmAccount;
    this.capsModel=this.tradeBasicCap.customerAccount;
    this.capsModel=this.tradeBasicCap.brokerAccount;
    this.capsModel=this.tradeBasicCap.legalEntity;
    this.capsModel=this.tradeBasicCap.externalSystem;
    this.capsModel=this.tradeBasicCap.subType;
    this.capsModel=this.tradeBasicCap.salesPerson;
    this.capsModel=this.tradeBasicCap.terminationDate;
    this.capsModel=this.tradeBasicCap.tradeType;
    this.capsModel=this.tradeBasicCap.earlyTermDate;
    this.capsModel=this.tradeBasicCap.earlyTermReason;
    this.capsModel=this.tradeBasicCap.modReason;
    this.capsModel=this.tradeBasicCap.comments;
    this.capsModel=this.tradeBasicCap.location;
    this.capsModel=this.tradeBasicCap.tradeDate;
    this.capsModel=this.tradeBasicCap.tenor;
    this.capsModel=this.tradeBasicCap.externalRef;
    this.capsModel=this.tradeBasicCap.longName;
    this.capsModel=this.tradeBasicCap.version;

    this.capsModel=this.additionalFieldsCap.bookingType;
    this.capsModel=this.additionalFieldsCap.flowSta;
    this.capsModel=this.additionalFieldsCap.matchStatus;
    this.capsModel=this.additionalFieldsCap.operationRef;
    this.capsModel=this.additionalFieldsCap.originTradeRef;
    this.capsModel=this.additionalFieldsCap.lastModifiedBy;
    this.capsModel=this.additionalFieldsCap.lastVerifiedBy;
    this.capsModel=this.additionalFieldsCap.alternateRef;
    this.capsModel=this.additionalFieldsCap.lastModified;
    this.capsModel=this.additionalFieldsCap.lastVerified;


    console.log(this.capsModel);
    return  this._http.post(this._url,capsModel,this.httpOptions);

}

}
