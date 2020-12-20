import { PaymentModel } from './payment.model';
import { PaymentService } from './payment.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  obj;
model=new PaymentModel();

  constructor(
    private paymentService:PaymentService) { }

    
    registrationform=new FormGroup({
      daycount :new FormControl(''),
      discountCurve :new FormControl(''),
      payBusDay:new FormControl(''),
      payCalendars :new FormControl(''),
      payFreq:new FormControl(''),
      payMarching :new FormControl(''),
      paymentConvention:new FormControl(''),
      payConvCur:new FormControl(''),
      payConvIndex:new FormControl(''),
      payConvLag :new FormControl(''),
      payRollDay :new FormControl(''),
      payRollWeek:new FormControl(''),
      payLag :new FormControl(''),
     
     });
 
     onSubmit(){
    
       console.warn(this.registrationform.value)
        }
        

  ngOnInit() {
  this.paymentService.getData().subscribe(res=>{
    this.obj=res;

    this.model.cmbDayCount=this.obj[0].daycount;
    this.model.cmbDiscountCurve=this.obj[1].id;
    this.model.cmbPayBusDay=this.obj[2].id;
    this.model.cntPayCalendars=this.obj[3].id;
    this.model.cmbPayFreq=this.obj[4].id;
    this.model.cmbPayMarching=this.obj[5].id;
    this.model.cmbPaymentConvention=this.obj[6].id;
    this.model.cmbPaymentConversionCurrency=this.obj[7].id;
    this.model.cmbPaymentConversionIndex=this.obj[8].id;  
    this.model.cmbPayRollDay=this.obj[10].id;
    this.model.cmbPayRollWeek=this.obj[11].id;

    this.model.txtPaymentConversionLag=this.obj[9].payfields[0];
    this.model.txtPayLag=this.obj[9].payfields[1];



    this.registrationform=new FormGroup({
      daycount :new FormControl(this.model.cmbDayCount[0]),
      discountCurve :new FormControl(this.model.cmbDiscountCurve[0]),
      payBusDay:new FormControl(this.model.cmbPayBusDay[0]),
      payCalendars :new FormControl(this.model.cntPayCalendars[0]),
      payFreq:new FormControl(this.model.cmbPayFreq[0]),
      payMarching :new FormControl(this.model.cmbPayMarching[0]),
      paymentConvention:new FormControl(this.model.cmbPaymentConvention[0]),
      payConvCur:new FormControl(this.model.cmbPaymentConversionCurrency[0]),
      payConvIndex:new FormControl(this.model.cmbPaymentConversionIndex[0]),
      payConvLag :new FormControl(this.model.txtPaymentConversionLag),
      payRollDay :new FormControl(this.model.cmbPayRollDay[0]),
      payRollWeek:new FormControl(this.model.cmbPayRollWeek[0]),
      payLag :new FormControl(this.model.txtPayLag),
     
     });




    this.model.txtPV=this.obj;
    this.model.txtRecParallelDelta=this.obj;
     this.model.cmbPVCurrency=this.obj[7].id;
    
     this.model.cmbCurvePnl=this.obj[1].id;
  })

  }

}
