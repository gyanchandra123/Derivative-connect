import { FormControl, FormGroup } from '@angular/forms';
import { FraTradeService } from './fra-trade-service';
import { FraTradeModel } from './fra-trade-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swapoption-tradebasic',
  templateUrl: './fra-trade-basic.component.html',
  styleUrls: ['./fra-trade-basic.component.css']
})
export class FraTradeBasicComponent implements OnInit {
  now:number;
  obj;
  xml;
  model=new FraTradeModel();
  constructor(private Serv:FraTradeService)
  {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }
  onSubmit(){
    console.log(this.registrationform.value)
  }
  registrationform = new FormGroup({
    version: new FormControl(''),
    productClass: new FormControl(''),
    brokerAccount: new FormControl(''),
    effectiveDate: new FormControl(''),
    customerAccount: new FormControl(''),
    earlyTermReason: new FormControl(''),
    externalSystem: new FormControl(''),
    externalRef:new FormControl(''),
    firmAccount: new FormControl(''),
    flowStatus: new FormControl(''),
    legalEntity: new FormControl(''),
    location: new FormControl(''),
    matchStatus: new FormControl(''),
    modReason: new FormControl(''),
    operationRef: new FormControl(''),
    salesPerson: new FormControl(''),
    subType: new FormControl(''),
    trader: new FormControl(''),
    tradeType: new FormControl(''),
    tenor: new FormControl(''),
    tradeDate: new FormControl(''),
    terminationDate: new FormControl(''),
    longName: new FormControl(''),
    earlyTermDate: new FormControl(''),
    comments: new FormControl(''),

  })
  
  ngOnInit()
  {
   
     this.Serv.getData().subscribe(xmlRes=>{
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
 
     this.registrationform = new FormGroup({

      version: new FormControl(this.model.version),
      productClass: new FormControl(this.model.productClass[0]),
      brokerAccount: new FormControl(this.model.brokerAccount[0]),
      effectiveDate: new FormControl(this.model.effectiveDate),
      customerAccount: new FormControl(this.model.customerAccount[0]),
      earlyTermReason: new FormControl(this.model.earlyTermReason[0]),
      externalSystem: new FormControl(this.model.externalSystem[0]),
      firmAccount: new FormControl(this.model.firmAccount[0]),
      flowStatus: new FormControl(this.model.flowStatus[0]),
      legalEntity: new FormControl(this.model.legalEntity[0]),
      location: new FormControl(this.model.location[0]),
      matchStatus: new FormControl(this.model.matchStatus[0]),
      modReason: new FormControl(this.model.modReason[0]),
      operationRef: new FormControl(this.model.operationRef),
      salesPerson: new FormControl(this.model.salesPerson[0]),
      subType: new FormControl(this.model.subType[0]),
      trader: new FormControl(this.model.trader[0]),
      tradeType: new FormControl(this.model.tradeType[0]),
      tenor: new FormControl(this.model.tenor),
      tradeDate: new FormControl(this.model.tradeDate),
      terminationDate: new FormControl(this.model.terminationDate),
      longName: new FormControl(this.model.longName),
      earlyTermDate: new FormControl(this.model.earlyTermDate),
      comments: new FormControl(this.model.comments),
  
    })

});
 
}
}


