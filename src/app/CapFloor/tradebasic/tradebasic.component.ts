import { TradeBasicServices } from './tradebasic.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TradeBasicModels } from './tradebasic.model';

@Component({
  selector: 'app-tradebasic',
  templateUrl: './tradebasic.component.html',
  styleUrls: ['./tradebasic.component.css']
})
export class TradebasicComponent implements OnInit {


obj;
now:number;

model=new TradeBasicModels();

constructor(private  tradeBasicServices:TradeBasicServices){
  setInterval(()=>{
    this.now=Date.now();
  },1);
}

registrationform=new FormGroup({
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
  console.warn( this.registrationform.value)
}


ngOnInit(){

  this.tradeBasicServices.getData().subscribe(xmlRes=>{
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


    this.registrationform=new FormGroup({
      version:new FormControl(this.model.version),
      product:new FormControl(this.model.productClass),
      tenor:new FormControl(this.model.tenor),
      effectivedate:new FormControl(this.model.effectiveDate),
      trader:new FormControl(this.model.trader),
      firmaccount:new FormControl(this.model.firmAccount),
      customeraccount:new FormControl(this.model.customerAccount),
      brokeraccount:new FormControl(this.model.brokerAccount),
      legalentity:new FormControl(this.model.legalEntity),
      externalsystem:new FormControl(this.model.externalSystem),
      externalref:new FormControl(this.model.externalRef),
      subtype:new FormControl(this.model.subType),
      location:new FormControl(this.model.location),
      tradedate:new FormControl(this.model.tradeDate),
      terminationdate:new FormControl(this.model.terminationDate),
      salesperson:new FormControl(this.model.salesPerson),
      tradetype:new FormControl(this.model.tradeType),
      longname:new FormControl(this.model.longName),
      earlytermdate:new FormControl(this.model.earlyTermDate),
      termreason:new FormControl(this.model.earlyTermReason),
      modreason:new FormControl(this.model.modReason),
      comments:new FormControl(this.model.comments),
    });

});
   

}
}
