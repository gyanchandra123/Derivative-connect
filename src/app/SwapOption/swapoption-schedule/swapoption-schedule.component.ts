import { Component, OnInit } from '@angular/core';
import { SechduleService } from '../services/so-schedule.service';
import { SechduleModel } from '../models/so-schedule.model';
import { NgxXml2jsonService } from 'ngx-xml2json'


@Component({
  selector: 'app-swapoption-schedule',
  templateUrl: './swapoption-schedule.component.html',
  styleUrls: ['./swapoption-schedule.component.css']
})
export class SwapoptionScheduleComponent implements OnInit {

  obj;
  xml;
  constructor(private ngx:NgxXml2jsonService,private quickServ:SechduleService,public model:SechduleModel)
  {}
  
  ngOnInit()
  {
   
     this.quickServ.getData().subscribe(xmlRes=>{
     this.xml=xmlRes });
     //console.log(this.xml);
   setTimeout(() => {
    const parser=new DOMParser();
    const xml=parser.parseFromString(this.xml,"text/xml");
    const obj=this.ngx.xmlToJson(xml);
    this.obj=obj;
    
     this.model.cmbPayPVCurrency = this.obj.schedule.Currency.cur;
    
     this.model.cmbPayCurve = this.obj.schedule.PayCurve.pcu;
     
     this.model.cmbRecPVCurrency = this.obj.schedule.Currency.cur;
      
     this.model.cmbRecCurve = this.obj.schedule.PayCurve.pcu;                            
  },1000);

}
}
