import { SwapPaymentService } from './swappayment.service';
import { SwapPaymentModel } from './swappayment.model';
import { Component, OnInit } from '@angular/core';
import {NgxXml2jsonService} from "ngx-xml2json";
import { SwapTicketSavingService } from '../swapticketsave/swapticketsaving.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-swappayment',
  templateUrl: './swappayment.component.html',
  styleUrls: ['./swappayment.component.css']
})
export class SwapPaymentComponent implements OnInit {

  xml;
  obj;
  model=new SwapPaymentModel();
  model2=new SwapPaymentModel();

  constructor(private swappaymentService:SwapPaymentService, private swapTicketSavingService:SwapTicketSavingService,public fb:FormBuilder){}
  completeForm=new FormGroup({
    busday:new FormControl(''),
    cal:new FormControl(''),
    freq:new FormControl(''), 
    march:new FormControl(''),
    payconv:new FormControl(''),
    convcur:new FormControl(''),
    convindex:new FormControl(''),
    convlag:new FormControl(''),
    rd:new FormControl(''),
    rw:new FormControl(''),
    paylag:new FormControl(''),
   });

   onSubmit() {
    console.warn( this.completeForm.value);

    this.model2.cmbPayPayBusDay=this.completeForm.value.busday;
    this.model2.cntPayPayCalendars=this.completeForm.value.cal;
    this.model2.cmbPayPayFreqPnl=this.completeForm.value.freq;
    this.model2.cmbPayPayMarching=this.completeForm.value.march;
    this.model2.cmbPayPaymentConvention=this.completeForm.value.payconv;
    this.model2.cmbPayPaymentConversionCurrency=this.completeForm.value.convcur;
    this.model2.cmbPayPaymentConversionIndex=this.completeForm.value.convindex;
    this.model2.txtPayPaymentConversionLag=this.completeForm.value.convlag;
    this.model2.cmbPayPayRollDay=this.completeForm.value.rd;
    this.model2.cmbPayRollWeek=this.completeForm.value.rw;
    this.model2.txtPayLag=this.completeForm.value.paylag;

    this.swapTicketSavingService.getPayment(this.model2);
   }
  ngOnInit(){
    this.swappaymentService.getData().subscribe(res =>{
      this.obj=res;
      this.model.cmbPayPayBusDay=this.obj[0].busDay;
      this.model.cntPayPayCalendars=this.obj[1].calendars;
      this.model.cmbPayPayFreqPnl=this.obj[2].frequency;
      this.model.cmbPayPayMarching=this.obj[3].marching;
      this.model.cmbPayPaymentConvention=this.obj[4].payconv;
      this.model.cmbPayPaymentConversionCurrency=this.obj[5].currency;
      this.model.cmbPayPaymentConversionIndex=this.obj[6].convIndex;
      this.model.txtPayPaymentConversionLag=this.obj[9].paymentConversionLag;
      this.model.cmbPayPayRollDay=this.obj[7].rollDay;
      this.model.cmbPayRollWeek=this.obj[8].weekDay;
      this.model.txtPayLag=this.obj[9].payLag;


      this.model.cmbRecPayBusDay=this.obj[0].busDay;
      this.model.cntRecPayCalendars=this.obj[1].calendars;
      this.model.cmbRecPayFreqPnl=this.obj[2].frequency;
      this.model.cmbRecPayMarching=this.obj[3].marching;
      this.model.cmbRecPaymentConvention=this.obj[4].payconv;
      this.model.cmbRecPaymentConversionCurrency=this.obj[5].currency;
      this.model.cmbRecPaymentConversionIndex=this.obj[6].convIndex;
      this.model.txtRecPaymentConversionLag=this.obj[9].paymentConversionLag;
      this.model.cmbRecPayRollDay=this.obj[7].rollDay;
      this.model.cmbRecRollWeek=this.obj[8].weekDay;
      this.model.txtRecLag=this.obj[9].payLag;
      
      this.completeForm=new FormGroup({
        busday:new FormControl(this.model.cmbPayPayBusDay[0]),
        cal :new FormControl(this.model.cntPayPayCalendars[0]),
        freq:new FormControl(this.model.cmbPayPayFreqPnl[0]),
        march:new FormControl(this.model.cmbPayPayMarching[0]),
        payconv:new FormControl(this.model.cmbPayPaymentConvention[0]),
        convcur:new FormControl(this.model.cmbPayPaymentConversionCurrency[0]),
        convindex:new FormControl(this.model.cmbPayPaymentConversionIndex[0]),
        convlag:new FormControl(this.model.txtPayPaymentConversionLag),
        rd:new FormControl(this.model.cmbPayPayRollDay[0]),
        rw:new FormControl(this.model.cmbPayRollWeek[0]),
        paylag:new FormControl(this.model.txtPayLag),
      });
      this.model2.cmbPayPayBusDay=this.completeForm.value.busday;
      this.model2.cntPayPayCalendars=this.completeForm.value.cal;
      this.model2.cmbPayPayFreqPnl=this.completeForm.value.freq;
      this.model2.cmbPayPayMarching=this.completeForm.value.march;
      this.model2.cmbPayPaymentConvention=this.completeForm.value.payconv;
      this.model2.cmbPayPaymentConversionCurrency=this.completeForm.value.convcur;
      this.model2.cmbPayPaymentConversionIndex=this.completeForm.value.convindex;
      this.model2.txtPayPaymentConversionLag=this.completeForm.value.convlag;
      this.model2.cmbPayPayRollDay=this.completeForm.value.rd;
      this.model2.cmbPayRollWeek=this.completeForm.value.rw;
      this.model2.txtPayLag=this.completeForm.value.paylag;
  
      this.swapTicketSavingService.getPayment(this.model2);

    });

     
  }
  
 }
