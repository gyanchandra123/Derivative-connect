import { Component, OnInit } from '@angular/core';
import { ResetsService } from '../services/so-reset.service';
import { SwapResetModel } from '../models/so-reset.model';
import { NgxXml2jsonService } from 'ngx-xml2json'


@Component({
  selector: 'app-swapoption-reset',
  templateUrl: './swapoption-reset.component.html',
  styleUrls: ['./swapoption-reset.component.css']
})
export class SwapoptionResetComponent implements OnInit {

  obj;
  xml;
  model=new SwapResetModel();
  constructor(private ngx:NgxXml2jsonService,private swapXmlServ:ResetsService)
  {}
  
  ngOnInit()
  {
   
     this.swapXmlServ.getData().subscribe(xmlRes=>{
     this.obj=xmlRes 
     //console.log(this.xml);
 
    
     /* Payment side model values for reset */

this.model.cntPayQuoteCalender = this.obj[0].calendar;                                  ;
this.model.txtPayQuoteLag = this.obj[10].swapLegList[14];
this.model.cntPayIntial = this.obj[0].calendar;        
this.model.IntialPayQuoteDate= this.obj[10].swapLegList[15];
this.model.IntialQuoteLag= this.obj[10].swapLegList[16];
this.model.cmbPayResetAveragins= this.obj[1].resetAveraging
this.model.cmbPayResetConvention = this.obj[2].compounding;                              
this.model.txtPayRateCutOff= this.obj[10].swapLegList[17];
this.model.cmbPayResetBusDay= this.obj[3].busDay;
this.model.cmbPayResetFreq=this.obj[4].frequency;                            
this.model.cmbPayResetMarching=this.obj[5].marching;                              
this.model.cmbPayResetPayRollDay= this.obj[6].rollDay;
this.model.cmbPayResetRollWeek= this.obj[7].rollWeek;
this.model.cmbPayResetType= this.obj[8].resetType;
this.model.cmbPayMarketIndex=this.obj[9].marketIndex;


 /* Reciver side model values for reset */   

 this.model.cntRecQuoteCalender = this.obj[0].calendar;                                  ;
 this.model.txtRecQuoteLag = this.obj[10].swapLegList[14];
 this.model.cntRecIntial = this.obj[0].calendar;                          
 this.model.IntialRecQuoteDate= this.obj[10].swapLegList[15];
 this.model.IntialQuoteLag=this.obj[10].swapLegList[16];
 this.model.cmbRecResetAveragins= this.obj[1].resetAveraging;
 this.model.cmbRecResetConvention = this.obj[2].compounding;                              
 this.model.txtRecRateCutOff= this.obj[10].swapLegList[17];
 this.model.cmbRecResetBusDay= this.obj[3].busDay;
 this.model.cmbRecResetFreq= this.obj[4].frequency;                            
 this.model.cmbRecResetMarching= this.obj[5].marching;                              
 this.model.cmbRecResetPayRollDay= this.obj[6].rollDay;
 this.model.cmbRecResetRollWeek= this.obj[7].rollWeek;
 this.model.cmbRecResetType= this.obj[8].resetType;
 this.model.cmbRecMarketIndex=this.obj[9].marketIndex;
 //console.log(this.obj);
});
 
}
}


