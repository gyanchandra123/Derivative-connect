import { Component, OnInit } from '@angular/core';
import { SwapOptionService } from '../services/swapoption.service';
import { SwapOptionModel } from '../models/swapoption.model';
import { NgxXml2jsonService } from 'ngx-xml2json'


@Component({
  selector: 'app-swapoption',
  templateUrl: './swapoption.component.html',
  styleUrls: ['./swapoption.component.css']
})
export class SwapoptionComponent implements OnInit {
  now:number;
  obj;
  xml;
  model=new SwapOptionModel();
  constructor(private ngx:NgxXml2jsonService ,private swapXmlServ:SwapOptionService)
  {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }
  
  ngOnInit()
  {
     this.swapXmlServ.getData().subscribe(xmlRes=>{
     this.obj=xmlRes  
    
    this.model.txtExpiryDate=this.obj[23].swapOptionList[0];
    this.model.cmbBuyFlag = this.obj[14].buyFlag;
    this.model.cmbOptionType = this.obj[16].optionType;
    this.model. cmbOptionStyle= this.obj[15].optionStyle;             
    this.model.cmbOptionPosition =this.obj[17].optionPosition;
    this.model.cmbPricingMethod = this.obj[18].pricingMethod; 
    this.model.txtStrike=this.obj[23].swapOptionList[3];
    this.model.txtSwapLag=this.obj[23].swapOptionList[2];
    this.model.txtSwapRef=this.obj[23].swapOptionList[4];
    this.model.txtSwapEndDate=this.obj[23].swapOptionList[1];
    this.model.txtSwapStartDate=this.obj[23].swapOptionList[5];
    this.model.cmbSwapLagBusDay= this.obj[19].swapBusDay;
    this.model.txtVolId=this.obj[23].swapOptionList[6];
    this.model.cmbExercirseFlag = this.obj[20].exerciseFlag;
    this.model.cmbExerciseType= this.obj[21].exerciseType; 
    

    this.model.cmbPay=this.obj[24].legtype;
    this.model.txtPayTenor=this.obj[22].swapLegList[1];
    this.model.cmbPayCurrency=this.obj[0].currency;
    this.model.txtPayNotional=this.obj[22].swapLegList[2];
    this.model.cmbPayNotionalExchange=this.obj[1].notionalExchange;
    this.model.txtPayStartDate=this.obj[22].swapLegList[3];
    this.model.txtPayStartStub=this.obj[22].swapLegList[4];
    this.model.txtPayEndDate=this.obj[22].swapLegList[5];
    this.model.txtPayEndStub=this.obj[22].swapLegList[6];
    this.model.cmbPayStartDateRollFlag=this.obj[2].startDateRollFlag;
    this.model.cmbPayEndDateRollFlag=this.obj[3].endRoll;
    this.model.txtPayFrontstubManual=this.obj[22].swapLegList[8];
    this.model.txtPayBackStubManual=this.obj[22].swapLegList[9];
    this.model.txtPayFixedQuote=this.obj[22].swapLegList[10];
    this.model.txtPayGearFactor=this.obj[22].swapLegList[12];
    this.model.txtPaySpread=this.obj[22].swapLegList[13];
    this.model.cmbPayDayCount=this.obj[4].dayCount;
    this.model.cmbPayDiscountCurve=this.obj[5].discountCurve;
    this.model.cmbPayAccrualBusDay=this.obj[6].busDay;
    this.model.cmbPayAccrualCalendars=this.obj[7].calendar;
    this.model.cmbPayAccrualFreq=this.obj[8].frequency;
    this.model.cmbPayAccrualMarching=this.obj[9].marching;
    this.model.cmbPayAccrualRollDay=this.obj[10].rollDay;
    this.model.cmbPayAccrualRollWeek=this.obj[11].rollWeek;
    this.model.cmbPayEndOfMonthIndicator=this.obj[12].eom;
    this.model.cmbPayCompounding=this.obj[13].compounding;
    this.model.cmbPayCompFreq=this.obj[8].frequency;

    this.model.cmbRec=this.obj[24].legtype;
    this.model.txtRecTenor=this.obj[22].swapLegList[1];
    this.model.cmbRecCurrency=this.obj[0].currency;
    this.model.txtRecNotional=this.obj[22].swapLegList[2];
    this.model.cmbRecNotionalExchange=this.obj[1].notionalExchange;
    this.model.txtRecStartDate=this.obj[22].swapLegList[3];
    this.model.txtRecStartStub=this.obj[22].swapLegList[4];
    this.model.txtRecEndDate=this.obj[22].swapLegList[5];
    this.model.txtRecEndStub=this.obj[22].swapLegList[6]
    this.model.cmbRecStartDateRollFlag=this.obj[2].startDateRollFlag;
    this.model.cmbRecEndDateRollFlag=this.obj[3].endRoll;
    this.model.txtRecFrontStubManual=this.obj[22].swapLegList[8];
    this.model.txtRecBackStubManual=this.obj[22].swapLegList[9];
    this.model.txtRecFixedQuote=this.obj[22].swapLegList[10];
    this.model.txtRecGearFactor=this.obj[22].swapLegList[12];
    this.model.txtRecSpread=this.obj[22].swapLegList[13];
    this.model.cmbRecDayCount=this.obj[4].dayCount;
    this.model.cmbRecDiscountCurve=this.obj[5].discountCurve;
    this.model.cmbRecAccrualBusDay=this.obj[6].busDay;
    this.model.cmbRecAccrualCalendars=this.obj[7].calendar;
    this.model.cmbRecAccrualFreq=this.obj[8].frequency;
    this.model.cmbRecAccrualMarching=this.obj[9].marching;
    this.model.cmbRecAccrualRollDay=this.obj[10].rollDay;
    this.model.cmbRecAccrualRollWeek=this.obj[11].rollWeek;
    this.model.cmbRecEndOfMonthIndicator=this.obj[12].eom;
    this.model.cmbRecCompounding=this.obj[13].compounding;
    this.model.cmbRecCompFreq=this.obj[8].frequency;

//console.log(this.obj);

     });
     
}
}
