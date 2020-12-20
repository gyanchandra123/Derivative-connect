import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { SwapResetModel } from './swapreset.model';
import { SwapResetService } from './swapreset.service';
import { SwapTicketSavingService } from '../swapticketsave/swapticketsaving.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-swapreset',
  templateUrl: './swapreset.component.html',
  styleUrls: ['./swapreset.component.css']
})


  export class SwapResetComponent implements OnInit {

    obj;
    xml;
    model=new SwapResetModel();
    model2=new SwapResetModel();
  constructor(private swapresetService:SwapResetService,
    private swapTicketSavingService:SwapTicketSavingService,public fb:FormBuilder){}
    completeForm=new FormGroup({
      calendar:new FormControl(''),
      quotelag:new FormControl(''),
      initialcalendars:new FormControl(''),
      quotedate:new FormControl(''),
      inquotelag:new FormControl(''),
      resetavg:new FormControl(''),
      resetconv:new FormControl(''),
      ratecutoff:new FormControl(''),
      busday:new FormControl(''),
      frequency:new FormControl(''),
      marching:new FormControl(''),
      rollday:new FormControl(''),
      rollweek:new FormControl(''),
      resettype:new FormControl(''),
      marketindex:new FormControl(''),



    });

    onSubmit() {
      console.warn( this.completeForm.value);

      this.model2.cntPayQuoteCalender=this.completeForm.value.calendar;
      this.model2.cntPayInitialQuotePayCalendars=this.completeForm.value.initialcalendars;
      this.model2.cmbPayResetAveragins=this.completeForm.value.resetavg;
      this.model2.cmbPayResetConvention=this.completeForm.value.resetconv;
      this.model2.cmbPayResetBusDay=this.completeForm.value.busday;
      this.model2.cmbPayResetFreq=this.completeForm.value.frequency;
      this.model2.cmbPayResetMarching=this.completeForm.value.marching;
      this.model2.cmbPayResetPayRollDay=this.completeForm.value.rollday;
      this.model2.cmbPayResetRollWeek=this.completeForm.value.rollweek;
      this.model2.cmbPayResetType=this.completeForm.value.resettype;
      this.model2.cmbPayMarketIndex=this.completeForm.value.marketindex;
      this.model2.txtPayQuoteLag=this.completeForm.value.quotelag;
      this.model2.txtPayInitialIntialPayQuoteDate=this.completeForm.value.quotedate;
      this.model2.txtPayIntialQuoteLag=this.completeForm.value.inquotelag;
      this.model2.txtPayRateCutOff=this.completeForm.value.ratecutoff;

      this.swapTicketSavingService.getReset(this.model2);

    }
  ngOnInit(){
    this.swapresetService.getData().subscribe(res =>{
      this.obj=res;
      this.model.cntPayQuoteCalender=this.obj[0].calendars;
      this.model.cntPayInitialQuotePayCalendars=this.obj[1].calendars;
      this.model.cmbPayResetAveragins=this.obj[2].resetAveraging;
      this.model.cmbPayResetConvention=this.obj[3].payconv;
      this.model.cmbPayResetBusDay=this.obj[4].busDay;
      this.model.cmbPayResetFreq=this.obj[5].frequency;
      this.model.cmbPayResetMarching=this.obj[6].marching;
      this.model.cmbPayResetPayRollDay=this.obj[7].rollDay;
      this.model.cmbPayResetRollWeek=this.obj[8].weekDay;
      this.model.cmbPayResetType=this.obj[9].resetType;
      this.model.cmbPayMarketIndex=this.obj[10].marketIndex;
     this.model.txtPayQuoteLag=this.obj[11].quoteLag;
     this.model.txtPayInitialIntialPayQuoteDate=this.obj[11].initialQuoteDate;
     this.model.txtPayIntialQuoteLag=this.obj[11].initialQuoteLag;
     this.model.txtPayRateCutOff=this.obj[11].rateCutOff;
  

      
     this.model.cntRecQuoteCalender=this.obj[0].calendars;
     this.model.cntRecInitialQuotePayCalendars=this.obj[1].calendars;
     this.model.cmbRecResetAveragins=this.obj[2].resetAveraging;
     this.model.cmbRecResetConvention=this.obj[3].payconv;
     this.model.cmbRecResetBusDay=this.obj[4].busDay;
     this.model.cmbRecResetFreq=this.obj[5].frequency;
     this.model.cmbRecResetMarching=this.obj[6].marching;
     this.model.cmbRecResetPayRollDay=this.obj[7].rollDay;
     this.model.cmbRecResetRollWeek=this.obj[8].weekDay;
     this.model.cmbRecResetType=this.obj[9].resetType;
     this.model.cmbRecMarketIndex=this.obj[10].marketIndex;
    this.model.txtRecQuoteLag=this.obj[11].quoteLag;
    this.model.txtRecIntialQuotePayDate=this.obj[11].initialQuoteDate;
    this.model.txtRecIntialcQuoteLag=this.obj[11].initialQuoteLag;
    this.model.txtRecRateCutOff=this.obj[11].rateCutOff;
 

    this.completeForm=new FormGroup({
      calendar:new FormControl(this.model.cntPayQuoteCalender[0]),
      quotelag:new FormControl(this.model.txtPayQuoteLag),
      initialcalendars:new FormControl(this.model.cntPayInitialQuotePayCalendars[0]),
      quotedate:new FormControl(this.model.txtPayInitialIntialPayQuoteDate),
      inquotelag:new FormControl(this.model.txtPayIntialQuoteLag),
      resetavg:new FormControl( this.model.cmbPayResetAveragins[0]),
      resetconv:new FormControl( this.model.cmbPayResetConvention[0]),
      ratecutoff:new FormControl( this.model.txtPayRateCutOff),
      busday:new FormControl(this.model.cmbPayResetBusDay[0]),
      frequency:new FormControl(this.model.cmbPayResetFreq[0]),
      marching:new FormControl(this.model.cmbPayResetMarching[0]),
      rollday:new FormControl(this.model.cmbPayResetPayRollDay[0]),
      rollweek:new FormControl(this.model.cmbPayResetRollWeek[0]),
      resettype:new FormControl(this.model.cmbPayResetType[0]),
      marketindex:new FormControl(this.model.cmbPayMarketIndex[0]),



    });
    this.model2.cntPayQuoteCalender=this.completeForm.value.calendar;
    this.model2.cntPayInitialQuotePayCalendars=this.completeForm.value.initialcalendars;
    this.model2.cmbPayResetAveragins=this.completeForm.value.resetavg;
    this.model2.cmbPayResetConvention=this.completeForm.value.resetconv;
    this.model2.cmbPayResetBusDay=this.completeForm.value.busday;
    this.model2.cmbPayResetFreq=this.completeForm.value.frequency;
    this.model2.cmbPayResetMarching=this.completeForm.value.marching;
    this.model2.cmbPayResetPayRollDay=this.completeForm.value.rollday;
    this.model2.cmbPayResetRollWeek=this.completeForm.value.rollweek;
    this.model2.cmbPayResetType=this.completeForm.value.resettype;
    this.model2.cmbPayMarketIndex=this.completeForm.value.marketindex;
    this.model2.txtPayQuoteLag=this.completeForm.value.quotelag;
    this.model2.txtPayInitialIntialPayQuoteDate=this.completeForm.value.quotedate;
    this.model2.txtPayIntialQuoteLag=this.completeForm.value.inquotelag;
    this.model2.txtPayRateCutOff=this.completeForm.value.ratecutoff;

    this.swapTicketSavingService.getReset(this.model2);

    });

     
  }
  
 }
