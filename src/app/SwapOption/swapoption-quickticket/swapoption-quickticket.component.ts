import { Component, OnInit } from '@angular/core';
import { QuickTicketService } from '../services/so-quickticket.service';
import { QuickTicketModel } from '../models/so-quickticket.model';
import { NgxXml2jsonService } from 'ngx-xml2json'


@Component({
  selector: 'app-swapoption-quickticket',
  templateUrl: './swapoption-quickticket.component.html',
  styleUrls: ['./swapoption-quickticket.component.css']
})
export class SwapoptionQuickticketComponent implements OnInit {
  now:number;
  obj;
  xml;
  model=new QuickTicketModel();
  constructor(private ngx:NgxXml2jsonService,private quickServ:QuickTicketService)
  {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }
  
  ngOnInit()
  {
   
     this.quickServ.getData().subscribe(xmlRes=>{
     this.obj=xmlRes 
  
    this.model.cmbQPaySide = this.obj[2].legtype;
    this.model.cmbQRecSide = this.obj[2].legtype;
    this.model.cmbQCurrency = this.obj[0].currency;
    this.model.txtQNotional= this.obj[1].swapLegList[22];
    this.model.txtQTenor = this.obj[1].swapLegList[21];
    this.model.txtQStartDate = this.obj[1].swapLegList[23];
    this.model.txtEndDate= this.obj[1].swapLegList[24];
    console.log(this.obj);
  });
   

}
}
