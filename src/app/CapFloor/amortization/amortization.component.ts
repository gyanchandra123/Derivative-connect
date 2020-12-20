import { AmortModel } from './amort.model';
import { AmortService } from './amort.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-amortization',
  templateUrl: './amortization.component.html',
  styleUrls: ['./amortization.component.css']
})
export class AmortizationComponent implements OnInit {

  obj;
  model= new AmortModel();
  constructor(
    private amortService:AmortService) { }

    onSubmit(){
      console.log(this.registrationform.value)
       }
       

    registrationform=new FormGroup({  
    amtType:new FormControl(''),
    amtStartDate:new FormControl(''),
    amtEndDate:new FormControl(''),
    amtBusDay:new FormControl(''),
    amtCal:new FormControl(''),
    amtFreq:new FormControl(''),
    amtMarch:new FormControl(''),
    amtRollDay:new FormControl(''),
    amtRollWeek:new FormControl(''),
    txtAmortAmount:new FormControl(''),
    txtPV:new FormControl(''),
    cmbPVCurrency:new FormControl(''),
    txtRecParallelDelta:new FormControl(''),
    cmbCurvePnl:new FormControl(''),
    })


  ngOnInit() {
   this.amortService.getData().subscribe(res=>{
     this.obj=res;
     
     this.model.cmbAmortType=this.obj[0].id;
     this.model.cmbAmortBusDay=this.obj[1].id;
     this.model.cntAmortCalendars=this.obj[2].id;
     this.model.cmbAmortFreq=this.obj[3].id;
     this.model.cmbAmortMarching=this.obj[4].id;
     this.model.cmbAmortRollDay=this.obj[5].id;
     this.model.cmbAmortRollWeek=this.obj[6].id;
     this.model.txtAmortAmount=this.obj[7].amortFields[2];
     this.model.txtAmortStartDate=this.obj[7].amortFields[0];
     this.model.txtAmortEndDate=this.obj[7].amortFields[1];

     
    this.registrationform=new FormGroup({  
      amtType:new FormControl( this.model.cmbAmortType[0]),
      amtStartDate:new FormControl(this.model.txtAmortStartDate),
      amtEndDate:new FormControl(this.model.txtAmortEndDate),
      amtBusDay:new FormControl(this.model.cmbAmortBusDay[0]),
      amtCal:new FormControl(this.model.cntAmortCalendars[0]),
      amtFreq:new FormControl(this.model.cmbAmortFreq[0]),
      amtMarch:new FormControl(this.model.cmbAmortMarching[0]),
      amtRollDay:new FormControl(this.model.cmbAmortRollDay[0]),
      amtRollWeek:new FormControl(this.model.cmbAmortRollWeek[0]),
      txtAmortAmount:new FormControl( this.model.txtAmortAmount),

      //capfloor schedule related fields
      txtPV:new FormControl(),
      cmbPVCurrency:new FormControl(),
      txtRecParallelDelta:new FormControl(),
      cmbCurvePnl:new FormControl(''),
      })
    


     this.model.txtPV=this.obj;
     this.model.cmbPVCurrency=this.obj;
     this.model.txtRecParallelDelta=this.obj;
     this.model.cmbCurvePnl=this.obj;

   });

   setTimeout(() => {
   
   }, 1000);
  }

}
