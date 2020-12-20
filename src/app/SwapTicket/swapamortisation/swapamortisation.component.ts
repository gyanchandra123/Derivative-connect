import { SwapAmortisationService } from './swapamortisation.service';
import { SwapAmortisationModel } from './swapamortisation.model';
import { Component, OnInit } from '@angular/core';
import {NgxXml2jsonService} from "ngx-xml2json";
import { SwapTicketSavingService } from '../swapticketsave/swapticketsaving.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-swapamortisation',
  templateUrl: './swapamortisation.component.html',
  styleUrls: ['./swapamortisation.component.css']
})
export class SwapAmortisationComponent implements OnInit {

  xml;
  obj;
  
  model=new SwapAmortisationModel();
  model2=new SwapAmortisationModel();
  constructor(private swapamortisationService:SwapAmortisationService, 
    private swapTicketSavingService:SwapTicketSavingService,public fb:FormBuilder){}

    completeForm=new FormGroup({
      amorttype:new FormControl(''),
      startdate :new FormControl(''),
      enddate :new FormControl(''),
      busday :new FormControl(''),
      calendar :new FormControl(''),
      frequency :new FormControl(''),
      marching :new FormControl(''),
      rollday :new FormControl(''),
      rollweek :new FormControl(''),
      amount :new FormControl(''),
    });
    onSubmit() {
      console.warn( this.completeForm.value);
      this.model2.cmbPayAmortType=this.completeForm.value.amorttype;
      this.model2.cmbPayAmortBusDay=this.completeForm.value.busday;
      this.model2.cntPayAmortCalendars=this.completeForm.value.calendar;
      this.model2.cmbPayAmortFreq=this.completeForm.value.frequency;
      this.model2.cmbPayAmortMarching=this.completeForm.value.marching;
      this.model2.cmbPayAmortRollDay=this.completeForm.value.rollday;
      this.model2.cmbPayAmortRollWeek=this.completeForm.value.rollweek;
      this.model2.txtPayAmortStartDate=this.completeForm.value.startdate;
      this.model2.txtPayAmortEndDate=this.completeForm.value.enddate;
      this.model2.txtPayAmortAmount=this.completeForm.value.amount;

      this.swapTicketSavingService.getAmort(this.model2);




    }
  ngOnInit(){
    this.swapamortisationService.getData().subscribe(res =>{
      this.obj=res;
      this.model.cmbPayAmortType=this.obj[0].amorttype;
      this.model.cmbPayAmortBusDay=this.obj[1].busDay;
      this.model.cntPayAmortCalendars=this.obj[2].calendars;
      this.model.cmbPayAmortFreq=this.obj[3].frequency;
      this.model.cmbPayAmortMarching=this.obj[4].marching;
      this.model.cmbPayAmortRollDay=this.obj[5].rollDay;
      this.model.cmbPayAmortRollWeek=this.obj[6].weekDay;
      this.model.txtPayAmortStartDate=this.obj[7].amortStartDate;
      this.model.txtPayAmortEndDate=this.obj[7].amortEndDate;
      this.model.txtPayAmortAmount=this.obj[7].amortAmount;




      this.model.cmbRecAmortType=this.obj[0].amorttype;
      this.model.cmbRecAmortBusDay=this.obj[1].busDay;
      this.model.cntRecAmortCalendars=this.obj[2].calendars;
      this.model.cmbRecAmortFreq=this.obj[3].frequency;
      this.model.cmbRecAmortMarching=this.obj[4].marching;
      this.model.cmbRecAmortRollDay=this.obj[5].rollDay;
      this.model.cmbRecAmortRollWeek=this.obj[6].weekDay;
     this.model.txtRecAmortStartDate=this.obj[7].amortStartDate;
      this.model.txtRecAmortEndDate=this.obj[7].amortEndDate;
      this.model.txtRecAmortAmount=this.obj[7].amortAmount;

      this.completeForm=new FormGroup({
        amorttype:new FormControl(this.model.cmbPayAmortType[0]),
        startdate :new FormControl(this.model.txtPayAmortStartDate),
        enddate :new FormControl(this.model.txtRecAmortEndDate),
        busday :new FormControl(this.model.cmbPayAmortBusDay[0]),
        calendar :new FormControl(this.model.cntPayAmortCalendars[0]),
        frequency :new FormControl(this.model.cmbPayAmortFreq[0]),
        marching :new FormControl(this.model.cmbPayAmortMarching[0]),
        rollday :new FormControl(this.model.cmbPayAmortRollDay[0]),
        rollweek :new FormControl(this.model.cmbPayAmortRollWeek[0]),
        amount :new FormControl(this.model.txtPayAmortAmount),
      });

      this.model2.cmbPayAmortType=this.completeForm.value.amorttype;
      this.model2.cmbPayAmortBusDay=this.completeForm.value.busday;
      this.model2.cntPayAmortCalendars=this.completeForm.value.calendar;
      this.model2.cmbPayAmortFreq=this.completeForm.value.frequency;
      this.model2.cmbPayAmortMarching=this.completeForm.value.marching;
      this.model2.cmbPayAmortRollDay=this.completeForm.value.rollday;
      this.model2.cmbPayAmortRollWeek=this.completeForm.value.rollweek;
      this.model2.txtPayAmortStartDate=this.completeForm.value.startdate;
      this.model2.txtPayAmortEndDate=this.completeForm.value.enddate;
      this.model2.txtPayAmortAmount=this.completeForm.value.amount;

      this.swapTicketSavingService.getAmort(this.model2);

    });

     
  }
  
 }
