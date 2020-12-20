import { FormGroup, FormControl } from '@angular/forms';
import { AdditionalFieldsService } from './additional-fields.service';
import { TradeAdditionalFieldsModel } from './additional-fields.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-fields',
  templateUrl: './additional-fields.component.html',
  styleUrls: ['./additional-fields.component.css']
})
export class AdditionalFieldsComponent implements OnInit {


  obj;
  model=new TradeAdditionalFieldsModel();

  constructor(
    private addFieldsService:AdditionalFieldsService
  ) { }

  registrationform=new  FormGroup({
   bookingType:new FormControl(''),
   flowStatus:new FormControl(''),
   origTradeRef:new FormControl(''),
   lastModBy:new FormControl(''),
   lastVerBy:new FormControl(''),
   matchStatus:new FormControl(''),
   oprRef:new FormControl(''),
   altRef:new FormControl(''),
   lastMod:new FormControl(''),
   lastVer:new FormControl('')


  })

  onSubmit(){
    console.log(this.registrationform.value);
  }


  ngOnInit() {
  
    this.addFieldsService.getData().subscribe(xmlRes=>{
      this.obj=xmlRes ;

      this.model.bookingType=this.obj[0].bookingType;
      this.model.flowSta=this.obj[1].flowStatus;
      this.model.matchStatus=this.obj[2].matchStatus;
      this.model.operationRef=this.obj[3].operRef;

      this.model.originTradeRef=this.obj[4].assignFields[0];
      this.model.lastModifiedBy=this.obj[4].assignFields[1];
      this.model.lastVerifiedBy=this.obj[4].assignFields[2];
      this.model.alternateRef=this.obj[4].assignFields[3];
      this.model.lastModified=this.obj[4].assignFields[4];
      this.model.lastVerified=this.obj[4].assignFields[5];
 
      console.log(this.obj);


      this.registrationform=new  FormGroup({
        bookingType:new FormControl(this.model.bookingType[0]),
        flowStatus:new FormControl(this.model.flowSta[0]),
        origTradeRef:new FormControl(this.model.originTradeRef),
        lastModBy:new FormControl(this.model.lastModifiedBy),
        lastVerBy:new FormControl(this.model.lastVerifiedBy),
        matchStatus:new FormControl(this.model.matchStatus[0]),
        oprRef:new FormControl(this.model.operationRef[0]),
        altRef:new FormControl(this.model.alternateRef),
        lastMod:new FormControl(this.model.lastModified),
        lastVer:new FormControl(this.model.lastVerified)
     
     
       })

    });

    }
  }


