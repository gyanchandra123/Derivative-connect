import { FormGroup, FormControl } from '@angular/forms';
import { FrasModel } from './fras.model';
import { FrasService } from './fras.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-fra',
  templateUrl: './fras.component.html',
  styleUrls: ['./fras.component.css']
})
export class FrasComponent implements OnInit {

  obj;
  model = new FrasModel();
  now:number;
  constructor(private fraService:FrasService) {

    setInterval(()=>{
    this.now=Date.now();
  },1);
  }
  onSubmit(){
    console.log(this.registrationform.value)
  }

  registrationform = new FormGroup({
    cmbCurrency:new FormControl(''),
    txtNotional:new FormControl(''),
    txtAgreedRate:new FormControl(''),
    cmbFraBuySell:new FormControl(''),
    cmbRateType:new FormControl(''),
    txtTenor:new FormControl(''),
    txtStartDate:new FormControl(''),
    txtMaturityDate:new FormControl(''),
    txtQuoteDate:new FormControl(''),
    cntQuoteCalendars:new FormControl(''),
    txtQuoteLag:new FormControl(''),
    txtSettlementDate:new FormControl(''),
    cmbDayCount:new FormControl(''),
    cmbDiscountCurve:new FormControl(''),
    cmbMarketIndex:new FormControl(''),
    cmbPayBusDay:new FormControl(''),
    cntPayCalendars:new FormControl(''),
    cmbPaymentConvention:new FormControl(''),
    cmbResetConvention:new FormControl(''),
    txtFWDRate:new FormControl(''),
    cmbRateSettingType:new FormControl(''),
    cmbResetType:new FormControl(''),
    txtPrecision:new FormControl(''),
    cmbPVCurrency:new FormControl(''),
    cmbCurve:new FormControl(''),

  })

  ngOnInit() {
    this.fraService.getFra().subscribe(res=>{
      this.obj=res;

      
    this.model.cmbCurrency=this.obj[0].id;
    this.model.txtNotional=this.obj[1].fraFields[0];
    this.model.txtAgreedRate=this.obj[1].fraFields[1];
    this.model.cmbFraBuySell=this.obj[2].id;
    this.model.cmbRateType=this.obj[3].id;
    this.model.txtTenor=this.obj[1].fraFields[2];
    this.model.txtStartDate=this.obj[1].fraFields[3];
    this.model.txtMaturityDate=this.obj[1].fraFields[4];
    this.model.txtQuoteDate=this.obj[1].fraFields[5]; 
    this.model.cntQuoteCalendars=this.obj[4].id; 
    this.model.txtQuoteLag=this.obj[1].fraFields[6];
    this.model.txtSettlementDate=this.obj[1].fraFields[7]; 
    this.model.cmbDayCount=this.obj[5].id;
    this.model.cmbDiscountCurve=this.obj[6].id;
    this.model.cmbMarketIndex=this.obj[7].id;
    this.model.cmbPayBusDay=this.obj[8].id;
    this.model.cntPayCalendars=this.obj[9].id;
    this.model.cmbPaymentConvention=this.obj[10].id;
    this.model.cmbResetConvention=this.obj[11].id;
    //this.model.txtFWDRate=this.obj.id;
    this.model.cmbRateSettingType=this.obj[12].id;
    this.model.cmbResetType=this.obj[13].id;
    this.model.txtPrecision=this.obj[1].fraFields[8]; 
    //this.model.txtPV=this.obj[22];
    this.model.cmbPVCurrency=this.obj[14].id;
    //this.model.txtRecParallelDelta=this.obj.id;
    this.model.cmbCurve=this.obj[6].id;
   
    this.registrationform = new FormGroup({

    cmbCurrency:new FormControl(this.model.cmbCurrency[0]),
    txtNotional:new FormControl(this.model.txtNotional),
    txtAgreedRate:new FormControl(this.model.txtAgreedRate),
    cmbFraBuySell: new FormControl(this.model.cmbFraBuySell[0]),
    cmbRateType: new FormControl(this.model.cmbRateType[0]),
    txtTenor: new FormControl(this.model.txtTenor),
    txtStartDate: new FormControl(this.model.txtStartDate),
    txtMaturityDate: new FormControl(this.model.txtMaturityDate),
    txtQuoteDate: new FormControl(this.model.txtQuoteDate),
    cntQuoteCalendars: new FormControl(this.model.cntQuoteCalendars[0]),
    txtQuoteLag: new FormControl(this.model.txtQuoteLag),
    txtSettlementDate: new FormControl(this.model.txtSettlementDate),
    cmbDayCount: new FormControl(this.model.cmbDayCount[0]),
    cmbDiscountCurve: new FormControl(this.model.cmbDiscountCurve[0]),
    cmbMarketIndex: new FormControl(this.model.cmbMarketIndex[0]),
    cmbPayBusDay: new FormControl(this.model.cmbPayBusDay[0]),
    cntPayCalendars: new FormControl(this.model.cntPayCalendars[0]),
    cmbPaymentConvention: new FormControl(this.model.cmbPaymentConvention[0]),
    cmbResetConvention: new FormControl(this.model.cmbResetConvention[0]),
  // txtFWDRate:new FormControl('this.model.txtFWDRate'),
    cmbRateSettingType: new FormControl(this.model.cmbRateSettingType[0]),
    cmbResetType:new FormControl(this.model.cmbResetType[0]),
    txtPrecision: new FormControl(this.model.txtPrecision),

    cmbPVCurrency: new FormControl(this.model.cmbPVCurrency[0]),
    //txtRecParallelDelta:new FormControl('this.model.txtRecParallelDelta'),
    cmbCurve:new FormControl(this.model.cmbCurve[0]),
    })
    
   
    });
  
   
  }

}
