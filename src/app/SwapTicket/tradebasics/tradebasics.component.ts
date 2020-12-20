import { Component, OnInit } from '@angular/core';
import { SwapTradeService } from './tradebasics.service';
import { TradeBasicsModel } from './tradebasics.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SwapTicketSavingService } from '../swapticketsave/swapticketsaving.service';
@Component({
  selector: 'app-tradebasic',
  templateUrl: './tradebasics.component.html',
  styleUrls: ['./tradebasics.component.css']
})
export class TradeBasicsComponent implements OnInit {
 
 
  now:number;
  obj;
  model= new TradeBasicsModel();
  model2= new TradeBasicsModel();
  constructor(private swapTradeService:SwapTradeService,private swapTicketSavingService:SwapTicketSavingService,public fb:FormBuilder){
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }
  completeForm=new FormGroup({
    version:new FormControl(''),
    product:new FormControl(''),
    tenor:new FormControl(''),
    effectivedate:new FormControl(''),
    trader:new FormControl(''),
    firmaccount:new FormControl(''),
    customeraccount:new FormControl(''),
    brokeraccount:new FormControl(''),
    legalentity:new FormControl(''),
    externalsystem:new FormControl(''),
    externalref:new FormControl(''),
    subtype:new FormControl(''),
    location:new FormControl(''),
    tradedate:new FormControl(''),
    terminationdate:new FormControl(''),
    salesperson:new FormControl(''),
    tradetype:new FormControl(''),
    longname:new FormControl(''),
    earlytermdate:new FormControl(''),
    termreason:new FormControl(''),
    modreason:new FormControl(''),
    comments:new FormControl(''),
  });
  onSubmit() {
    console.warn( this.completeForm.value);
    this.model2.version=this.completeForm.value.version;
    this.model2.productClass=this.completeForm.value.product;
    this.model2.brokerAccount=this.completeForm.value.brokeraccount;
    this.model2.effectiveDate=this.completeForm.value.effectivedate;
    this.model2.customerAccount=this.completeForm.value.customeraccount;
    this.model2.earlyTermReason=this.completeForm.value.termreason;
    this.model2.externalSystem=this.completeForm.value.externalsystem;
    this.model2.firmAccount=this.completeForm.value.firmaccount;
    this.model2.legalEntity=this.completeForm.value.legalentity;
    this.model2.location=this.completeForm.value.location;
    this.model2.modReason=this.completeForm.value.modreason;
    this.model2.salesPerson=this.completeForm.value.salesperson;
    this.model2.subType=this.completeForm.value.subtype;
    this.model2.trader=this.completeForm.value.trader;
    this.model2.tradeType=this.completeForm.value.tradetype;
    this.model2.tenor=this.completeForm.value.tenor;
    this.model2.tradeDate=this.completeForm.value.tradedate;
    this.model2.terminationDate=this.completeForm.value.terminationdate;
    this.model2.longName=this.completeForm.value.longname;
    this.model2.earlyTermDate=this.completeForm.value.earlytermdate;
    this.model2.comments=this.completeForm.value.comments;
    this.model2.externalRef=this.completeForm.value.externalref;


    this.swapTicketSavingService.getTradeTicket(this.model2);
  }
  ngOnInit(){

    this.swapTradeService.getData().subscribe(xmlRes=>{
      this.obj=xmlRes 
      
      this.model.version=this.obj[15].tradebasic[0];
      this.model.productClass=this.obj[12].productClass;
      this.model.brokerAccount=this.obj[1].brokerAccount;
      this.model.effectiveDate=this.obj[15].tradebasic[2];
      this.model.customerAccount=this.obj[2].customerAccount;
      this.model.earlyTermReason=this.obj[3].earlyTermReason;
      this.model.externalSystem=this.obj[4].externalSystem;
      this.model.firmAccount=this.obj[5].firmAccount;
      this.model.legalEntity=this.obj[7].legalEntity;
      this.model.location=this.obj[8].location;
      this.model.modReason=this.obj[10].modReason;
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
      this.model.externalRef=this.obj[15].tradebasic[8];


    //  this.swapTicketSavingService.getTradeTicket(this.model);


      this.completeForm=new FormGroup({
        version:new FormControl(this.model.version),
        product:new FormControl(this.model.productClass[0]),
        tenor:new FormControl(this.model.tenor),
        effectivedate:new FormControl(this.model.effectiveDate),
        trader:new FormControl(this.model.trader[0]),
        firmaccount:new FormControl(this.model.firmAccount[0]),
        customeraccount:new FormControl(this.model.customerAccount[0]),
        brokeraccount:new FormControl(this.model.brokerAccount[0]),
        legalentity:new FormControl(this.model.legalEntity[0]),
        externalsystem:new FormControl(this.model.externalSystem[0]),
        externalref:new FormControl(this.model.externalRef),
        subtype:new FormControl(this.model.subType[0]),
        location:new FormControl(this.model.location[0]),
        tradedate:new FormControl(this.model.tradeDate),
        terminationdate:new FormControl(this.model.terminationDate),
        salesperson:new FormControl(this.model.salesPerson[0]),
        tradetype:new FormControl(this.model.tradeType[0]),
        longname:new FormControl(this.model.longName),
        earlytermdate:new FormControl(this.model.earlyTermDate),
        termreason:new FormControl(this.model.earlyTermReason[0]),
        modreason:new FormControl(this.model.modReason[0]),
        comments:new FormControl(this.model.comments),
      });

      this.model2.version=this.completeForm.value.version;
      this.model2.productClass=this.completeForm.value.product;
      this.model2.brokerAccount=this.completeForm.value.brokeraccount;
      this.model2.effectiveDate=this.completeForm.value.effectivedate;
      this.model2.customerAccount=this.completeForm.value.customeraccount;
      this.model2.earlyTermReason=this.completeForm.value.termreason;
      this.model2.externalSystem=this.completeForm.value.externalsystem;
      this.model2.firmAccount=this.completeForm.value.firmaccount;
      this.model2.legalEntity=this.completeForm.value.legalentity;
      this.model2.location=this.completeForm.value.location;
      this.model2.modReason=this.completeForm.value.modreason;
      this.model2.salesPerson=this.completeForm.value.salesperson;
      this.model2.subType=this.completeForm.value.subtype;
      this.model2.trader=this.completeForm.value.trader;
      this.model2.tradeType=this.completeForm.value.tradetype;
      this.model2.tenor=this.completeForm.value.tenor;
      this.model2.tradeDate=this.completeForm.value.tradedate;
      this.model2.terminationDate=this.completeForm.value.terminationdate;
      this.model2.longName=this.completeForm.value.longname;
      this.model2.earlyTermDate=this.completeForm.value.earlytermdate;
      this.model2.comments=this.completeForm.value.comments;
      this.model2.externalRef=this.completeForm.value.externalref;
  
  
      this.swapTicketSavingService.getTradeTicket(this.model2);
 });
  
  }
    
  
  
}
