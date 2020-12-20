/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swapoption-tradebasic',
  templateUrl: './swapoption-tradebasic.component.html',
  styleUrls: ['./swapoption-tradebasic.component.css']
})
export class SwapoptionTradebasicComponent implements OnInit {
  
  ngOnInit() {
  }
  
}
 */
import { Component, OnInit } from '@angular/core';
import { TradeBasicService } from '../services/so-tradebasic.service';
import { TradeBasicModel } from '../models/so-tradebasic.model';

@Component({
  selector: 'app-swapoption-tradebasic',
  templateUrl: './swapoption-tradebasic.component.html',
  styleUrls: ['./swapoption-tradebasic.component.css']
})
export class SwapoptionTradebasicComponent implements OnInit {
  now:number;
  obj;
  xml;
  model=new TradeBasicModel();
  constructor(private swapXmlServ:TradeBasicService)
  {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }
  
  ngOnInit()
  {
   
     this.swapXmlServ.getData().subscribe(xmlRes=>{
     this.obj=xmlRes 
     this.model.version=this.obj[15].tradebasic[0];
     this.model.productClass=this.obj[12].productClass;
     this.model.brokerAccount=this.obj[1].brokerAccount;
     this.model.effectiveDate=this.obj[15].tradebasic[2];
     this.model.customerAccount=this.obj[2].customerAccount;
     this.model.earlyTermReason=this.obj[3].earlyTermReason;
     this.model.externalSystem=this.obj[4].externalSystem;
     this.model.firmAccount=this.obj[5].firmAccount;
     this.model.flowStatus=this.obj[6].flowStatus;
     this.model.legalEntity=this.obj[7].legalEntity;
     this.model.location=this.obj[8].location;
     this.model.matchStatus=this.obj[9].matchStatus;
     this.model.modReason=this.obj[10].modReason;
     this.model.externalRef=this.obj[15].tradebasic[8];
     this.model.operationRef=this.obj[11].operationalRef;
     this.model.salesPerson=this.obj[13].salesPerson;
     this.model.subType=this.obj[14].subType;
     this.model.trader=this.obj[16].trader;
     this.model.tradeType=this.obj[17].tradeType;
     this.model.tenor=this.obj[15].tradebasic[1];
     this.model.tradeDate=this.obj[15].tradebasic[3];
     this.model.terminationDate=this.obj[15].tradebasic[4];
     this.model.longName=this.obj[15].tradebasic[5];
     this.model.earlyTermDate=this.obj[15].tradebasic[6];
     this.model.comments=this.obj[15].tradebasic[7];
 console.log(this.obj);
});
 
}
}


