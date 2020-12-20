import { FraAddModel } from './fra-add-model';
import { Component, OnInit } from '@angular/core';

import { NgxXml2jsonService } from 'ngx-xml2json'
import { FraAddService } from './fra-add-service';


@Component({
  selector: 'app-swapoption-additionalfields',
  templateUrl: './fra-additional-fields.component.html',
  styleUrls: ['./fra-additional-fields.component.css']
})
export class FraAdditionalFieldsComponent implements OnInit {
  now:number;
  obj;
  xml;
  model=new FraAddModel();
  constructor(private Serv:FraAddService)
  {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }
  
  ngOnInit()
  {
   
     this.Serv.getData().subscribe(xmlRes=>{
     this.obj=xmlRes 
     this.model.bookingType=this.obj[0].bookingType;
     this.model.flowStatus=this.obj[6].flowStatus;
     this.model.matchStatus=this.obj[9].matchStatus;
     this.model.operationRef=this.obj[11].operationsRef;
     this.model.originTradeRef=this.obj[18].addFields[0];
     this.model.lastModifiedBy=this.obj[18].addFields[1];
     this.model.lastVerifiedBy=this.obj[18].addFields[2];
     this.model.alternativeRef=this.obj[18].addFields[3];
     this.model.lastModified=this.obj[18].addFields[4];
     this.model.lastVerified=this.obj[18].addFields[5];
 console.log(this.obj);
});
 
}
}
