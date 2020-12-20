import { QuickTicketsService } from './quicktickets.service';
import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { QuickTicketsModel } from './quicktickets.model';
import { ChangeTenor } from './changeTenor.model';
import { SwapTicketSavingService } from '../swapticketsave/swapticketsaving.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-quickticket',
  templateUrl: './quicktickets.component.html',
  styleUrls: ['./quicktickets.component.css']
})
export class QuickTicketsComponent implements OnInit {

  obj;
  xml;
  now:number;
  tenorModel = new ChangeTenor();
  model=new QuickTicketsModel();
  model2=new QuickTicketsModel();
  constructor(private swapquickticketService:QuickTicketsService,private swapTicketSavingService:SwapTicketSavingService,public fb:FormBuilder){
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

  completeForm=new FormGroup({
    qpay:new FormControl(''),
    qrec:new FormControl(''),
    qcur:new FormControl(''),
    not:new FormControl(''),
    qtenor:new FormControl(''),
    startdate:new FormControl(''),
    enddate:new FormControl(''),
 
 


  });
  onSubmit() {
    console.warn( this.completeForm.value);
    this.model2.cmbQPaySide=this.completeForm.value.qpay;
    this.model.cmbQRecSide=this.completeForm.value.qrec;
    this.model.cmbQCurrency=this.completeForm.value.qcur;
    this.model.txtQNotional=this.completeForm.value.not;
    this.model.txtQStartDate=this.completeForm.value.startdate;
    this.model.txtEndDate=this.completeForm.value.enddate;

    
  }
  ngOnInit(){
    this.swapquickticketService.getData().subscribe(res =>{
      this.obj=res;
      this.model.cmbQPaySide=this.obj[0].qPos;
      this.model.cmbQRecSide=this.obj[1].qPos;
      this.model.cmbQCurrency=this.obj[2].currency;
      this.model.txtQNotional=this.obj[3].qnotional;
      this.model.txtQStartDate=this.obj[3].qstartDate;
      this.model.txtEndDate=this.obj[3].qendDate;
      this.model.txtQTenor=this.obj[3].qtenor;
     // this.model.txtQNotional=this.obj[3].swapleg[0];
     this.model.txtModStatus = "loaded";

     this.completeForm=new FormGroup({
      qpay:new FormControl(this.model.cmbQPaySide[0]),
      qrec:new FormControl(this.model.cmbQRecSide[0]),
      qcur:new FormControl(this.model.cmbQCurrency[0]),
      not:new FormControl(this.model.txtQNotional),
      qtenor:new FormControl(this.model.txtQTenor),
      startdate:new FormControl(this.model.txtQStartDate),
      enddate:new FormControl(this.model.txtEndDate),
     });
    });

    
  }
    private handleEvent(): void {
    
  
      this.tenorModel.tenor = this.model.txtQTenor;
      this.tenorModel.startDate = this.model.txtQStartDate;
      this.swapquickticketService.getTenorDate(this.tenorModel).subscribe(
        res => {
          this.obj = res;
         
          this.model.txtEndDate = this.obj.date;
          this.model.txtModStatus="modified";
         
        }
  
      );
     
  

  
  
 }
}