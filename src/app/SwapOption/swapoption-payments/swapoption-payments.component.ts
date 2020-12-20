import { Component, OnInit } from '@angular/core';
import { SwapPaymentService } from '../services/so-payments.service';
import { SwapPaymentModel } from '../models/so-payments.model';
import { NgxXml2jsonService } from 'ngx-xml2json'


@Component({
  selector: 'app-swapoption-payments',
  templateUrl: './swapoption-payments.component.html',
  styleUrls: ['./swapoption-payments.component.css']
})
export class SwapoptionPaymentsComponent implements OnInit {

  xml;
  obj;
  model=new SwapPaymentModel();
  constructor(private xmlService:SwapPaymentService){}
  ngOnInit(){
    this.xmlService.getData().subscribe(xmlRes=>{
      this.obj=xmlRes;
      /* Pay Part */
     this.model.cmbPayPayBusDay=this.obj[0].busDay;
     this.model.cntPayPayCalendars=this.obj[1].calendar;
     this.model.cmbPayPayFreqPnl=this.obj[2].frequency;
     this.model.cmbPayPayMarching=this.obj[3].marching;
     this.model.cmbPayPaymentConvention=this.obj[4].paymentConvention;
     this.model.cmbPayPaymentConversionCurrency=this.obj[5].currency;                                          
     this.model.cmbPayPaymentConversionIndex=this.obj[6].paymentConversionIndex;
     this.model.txtPayPaymentConversionLag=this.obj[9].swapLegList[12];
     this.model.cmbPayPayRollDay=this.obj[7].rollDay;
     this.model.cmbPayRollWeek=this.obj[8].rollWeek;                         
     this.model.txtPayLag=this.obj[9].swapLegList[13];


    /*  Recive Part */
  
     this.model.cmbRecPayBusDay=this.obj[0].busDay;
     this.model.cntRecPayCalendars=this.obj[1].calendar;                             
     this.model.cmbRecPayFreqPnl=this.obj[2].frequency;                           
     this.model.cmbRecPayMarching=this.obj[3].marching;
     this.model.cmbRecPaymentConvention=this.obj[4].paymentConvention;
     this.model.cmbRecPaymentConversionCurrency=this.obj[5].currency;                                            
     this.model.cmbRecPaymentConversionIndex=this.obj[6].paymentConversionIndex;
     this.model.txtRecPaymentConversionLag=this.obj[9].swapLegList[12];
     this.model.cmbRecPayRollDay=this.obj[7].rollDay;
     this.model.cmbRecRollWeek=this.obj[8].rollWeek;        
     this.model.txtRecLag=this.obj[9].swapLegList[13];

//console.log(this.obj.payment);
//console.log(this.obj);
    });
    
   }
}
