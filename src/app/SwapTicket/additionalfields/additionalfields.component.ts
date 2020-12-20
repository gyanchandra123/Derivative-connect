import { SwapAdditionlService } from './additionalfields.service';
import { Component, OnInit } from '@angular/core';
import { TradeAdditionalModel } from './additionalfields.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { SwapTicketSavingService } from '../swapticketsave/swapticketsaving.service';
@Component({
  selector: 'app-additionalfields',
  templateUrl: './additionalfields.component.html',
  styleUrls: ['./additionalfields.component.css']
})
export class AdditionalfieldsComponent implements OnInit {

  obj;

  model=new TradeAdditionalModel();
  model2=new TradeAdditionalModel();
  constructor(
    private swapAdditionlService:SwapAdditionlService,private swapTicketSavingService:SwapTicketSavingService, fb:FormBuilder
  ) { }
  completeForm=new FormGroup({
    bookingtype:new FormControl(''),
    flow :new FormControl(''),
    traderef :new FormControl(''),
    lastmodifiedby :new FormControl(''),
    lastverifiedby :new FormControl(''),
    match :new FormControl(''),
    opref :new FormControl(''),
    altref :new FormControl(''),
    lastmodified :new FormControl(''),
    lastverified :new FormControl(''),


  });
  onSubmit() {
    console.warn( this.completeForm.value);
    this.model2.bookingType=this.completeForm.value.bookingtype;
    this.model2.flowStatus=this.completeForm.value.flow;
    this.model2.matchStatus=this.completeForm.value.match;
    this.model2.operationRef=this.completeForm.value.opref;
    this.model2.originTradeRef=this.completeForm.value.traderef;
    this.model2.lastModifiedBy=this.completeForm.value.lastmodifiedby;
    this.model2.lastVerifiedBy=this.completeForm.value.lastverifiedby;
    this.model2.alternateRef=this.completeForm.value.altref;
    this.model2.lastModified=this.completeForm.value.lastmodified;
    this.model2.lastVerified=this.completeForm.value.lastverified;

    this.swapTicketSavingService.getAddFields(this.model2);
  }

  ngOnInit() {

    this.swapAdditionlService.getData().subscribe(xmlRes=>{
      this.obj=xmlRes 
      this.model.bookingType=this.obj[0].bookingType;
      this.model.flowStatus=this.obj[6].flowStatus;
      this.model.matchStatus=this.obj[9].matchStatus;
      this.model.operationRef=this.obj[11].operationsRef;
      this.model.originTradeRef=this.obj[18].addFields[0];
      this.model.lastModifiedBy=this.obj[18].addFields[1];
      this.model.lastVerifiedBy=this.obj[18].addFields[2];
      this.model.alternateRef=this.obj[18].addFields[3];
      this.model.lastModified=this.obj[18].addFields[4];
      this.model.lastVerified=this.obj[18].addFields[5];
  
     //this.swapTicketSavingService.getAddFields(this.model);

      this.completeForm=new FormGroup({
        bookingtype:new FormControl( this.model.bookingType[0]),
        flow :new FormControl(this.model.flowStatus[0]),
        traderef :new FormControl(this.model.originTradeRef),
        lastmodifiedby :new FormControl(this.model.lastModifiedBy),
        lastverifiedby :new FormControl(this.model.lastVerifiedBy),
        match :new FormControl(this.model.matchStatus[0]),
        opref :new FormControl(this.model.operationRef[0]),
        altref :new FormControl(this.model.alternateRef),
        lastmodified :new FormControl(this.model.lastModified),
        lastverified :new FormControl(this.model.lastVerified),
    
    
      });

      this.model2.bookingType=this.completeForm.value.bookingtype;
      this.model2.flowStatus=this.completeForm.value.flow;
      this.model2.matchStatus=this.completeForm.value.match;
      this.model2.operationRef=this.completeForm.value.opref;
      this.model2.originTradeRef=this.completeForm.value.traderef;
      this.model2.lastModifiedBy=this.completeForm.value.lastmodifiedby;
      this.model2.lastVerifiedBy=this.completeForm.value.lastverifiedby;
      this.model2.alternateRef=this.completeForm.value.altref;
      this.model2.lastModified=this.completeForm.value.lastmodified;
      this.model2.lastVerified=this.completeForm.value.lastverified;
  
      this.swapTicketSavingService.getAddFields(this.model2);
 });

  }

}
