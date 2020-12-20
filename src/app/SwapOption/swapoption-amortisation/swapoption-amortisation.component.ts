import { Component, OnInit } from '@angular/core';
import { SwapAmortisationService } from '../services/so-amortisation.service';
import { SwapAmortisationModel } from '../models/so-amortisation.model';
import { NgxXml2jsonService } from 'ngx-xml2json'

@Component({
  selector: 'app-swapoption-amortisation',
  templateUrl: './swapoption-amortisation.component.html',
  styleUrls: ['./swapoption-amortisation.component.css']
})
export class SwapoptionAmortisationComponent implements OnInit {
  xml;
  obj;
  model=new SwapAmortisationModel();
  constructor(
    private ngxXml2jsonService:NgxXml2jsonService,
    private xmlService:SwapAmortisationService
  ){}
  ngOnInit(){
    this.xmlService.getData().subscribe(xmlRes=>{
      this.obj=xmlRes;
      this.model.cmbPayAmortType=this.obj[0].amortType;
      this.model.txtPayAmortStartDate=this.obj[7].swapLegList[18];
      this.model.txtPayAmortEndDate=this.obj[7].swapLegList[19];
      this.model.cmbPayAmortBusDay=this.obj[1].busDay;
      this.model.cntPayAmortCalendars=this.obj[2].calendar;
      this.model.cmbPayAmortFreq=this.obj[3].frequency;
      this.model.cmbPayAmortMarching=this.obj[4].marching;
      this.model.cmbPayAmortRollDay=this.obj[5].rollDay;
      this.model.cmbPayAmortRollWeek=this.obj[6].rollWeek;
      this.model.txtPayAmortAmount=this.obj[7].swapLegList[20];


      this.model.cmbRecAmortType=this.obj[0].amortType;
      this.model.txtRecAmortStartDate=this.obj[7].swapLegList[18];
      this.model.txtRecAmortEndDate=this.obj[7].swapLegList[19];
      this.model.cmbRecAmortBusDay=this.obj[1].busDay;
      this.model.cntRecAmortCalendars=this.obj[2].calendar;
      this.model.cmbRecAmortFreq=this.obj[3].frequency;
      this.model.cmbRecAmortMarching=this.obj[4].marching;
      this.model.cmbRecAmortRollDay=this.obj[5].rollDay;
      this.model.cmbRecAmortRollWeek=this.obj[6].rollWeek;
      this.model.txtRecAmortAmount=this.obj[7].swapLegList[20];
      console.log(this.obj)
    });
      
  }
}
