
import { Component, OnInit } from '@angular/core';
import { QuickModel } from './quick.model';
import { QuickTicketService } from './quickticket.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-quickticket',
  templateUrl: './quickticket.component.html',
  styleUrls: ['./quickticket.component.css']
})
export class QuickticketComponent implements OnInit {

   obj;
   model= new QuickModel();
  now:number;

   constructor(
    private quickService:QuickTicketService){
      setInterval(()=>{
        this.now=Date.now();
      },1);
    }

    
    onSubmit(){
      console.log(this.registrationform.value)
       }
       
       
    registrationform=new FormGroup({ 
      cmbQCurrency:new FormControl(''),
      txtNotionals:new FormControl(''),
      txtQTenor:new FormControl(''),
      txtQStartDate:new FormControl(''),
      txtQEndDate:new FormControl(''),
    })
 
   ngOnInit(){
    this.quickService.getData().subscribe(res=>{
    this.obj=res;


    this.model.cmbQCurrency=this.obj[0].id;
      this.model.txtNotionals=this.obj[1].quickFields[2];
      this.model.txtQStartDate=this.obj[1].quickFields[0];
      this.model.txtQEndDate=this.obj[1].quickFields[1];
      this.model.txtQTenor=this.obj[1].quickFields[3];

      this.registrationform=new FormGroup({ 
        cmbQCurrency:new FormControl(this.model.cmbQCurrency[0]),
        txtNotionals:new FormControl(this.model.txtNotionals),
        txtQTenor:new FormControl(this.model.txtQStartDate),
        txtQStartDate:new FormControl(this.model.txtQEndDate),
        txtQEndDate:new FormControl(this.model.txtQTenor),
      })
    

    })
 
    setTimeout(()=>{
    },1000); 
   }
 

}
