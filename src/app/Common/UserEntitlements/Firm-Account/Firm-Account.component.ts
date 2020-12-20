import {FirmAccountService} from './Firm-Account.service'
import { Component, OnInit } from '@angular/core';

import {NgxXml2jsonService} from "ngx-xml2json";
import{FirmAccountModel} from "./Firm-Account.model";

@Component({
  selector: 'app-firm-account',
  templateUrl: './firm-account.component.html',
  styleUrls: ['./firm-account.component.css']
})
export class FirmAccountComponent implements OnInit{
  xml;
  obj;
  model=new FirmAccountModel();
  constructor(
    private ngxXml2jsonService:NgxXml2jsonService,
    private FirmAccountService:FirmAccountService
  ){}
  ngOnInit(){
    this.FirmAccountService.getData().subscribe(Res=>{
      this.obj=Res;
      this.model.Business=this.obj[7].business;
      this.model.Department = this.obj[15].department;
      this.model.Role = this.obj[27].role;
     
     
    });
    setTimeout(()=>{
 
    
    },1000); 
   }
 }
 
