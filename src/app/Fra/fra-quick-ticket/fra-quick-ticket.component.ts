import { Component, OnInit } from '@angular/core';
import { FraQuickTicketService } from './fra-quick-ticket.service';
import { FraQuickticketModel } from './fra-quick-ticket.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quick-ticket',
  templateUrl: './fra-quick-ticket.component.html',
  styleUrls: ['./fra-quick-ticket.component.css']
})
export class FraQuickTicketComponent implements OnInit {
  
  obj;
  model = new FraQuickticketModel();
  now:number;
  constructor(private quickTicketService:FraQuickTicketService) {
    setInterval(()=>{
      this.now=Date.now();
    },1);
   }
   onSubmit(){
    console.log(this.registrationform.value)
     }
     
     
  registrationform=new FormGroup({ 
    cmbQCurrency:new FormControl(''),
    txtQNotional:new FormControl(''),
    txtQAgreedRatePnl:new FormControl(''),
    cmbQBuySell:new FormControl(''),
    txtQTenor:new FormControl(''),
    txtQStartDate:new FormControl(''),
    txtQEndDate:new FormControl(''),
  })

    ngOnInit() {
      this.quickTicketService.getQuick().subscribe(res=>{
        this.obj=res;

    this.model.cmbQCurrency=this.obj[0].id;
    this.model.txtQNotional=this.obj[2].quickFields[9];
    this.model.txtQAgreedRatePnl=this.obj[2].quickFields[10];
    this.model.cmbQBuySell=this.obj[1].id;
    this.model.txtQTenor=this.obj[2].quickFields[11];
    this.model.txtQStartDate=this.obj[2].quickFields[12];
    this.model.txtQEndDate=this.obj[2].quickFields[13];

    this.registrationform=new FormGroup({ 

    cmbQCurrency:new FormControl(this.model.cmbQCurrency[0]),
    txtQNotional:new FormControl(this.model.txtQNotional),
    txtQAgreedRatePnl:new FormControl(this.model.txtQAgreedRatePnl),
    cmbQBuySell:new FormControl(this.model.cmbQBuySell[0]),
    txtQTenor:new FormControl(this.model.txtQTenor),
    txtQStartDate:new FormControl(this.model.txtQStartDate),
    txtQEndDate:new FormControl(this.model.txtQEndDate),

    })

      })

      setTimeout(()=>{

      },1000);
}
}