import {CustomerAccountService} from './Customer-Account.service';
import { Component, OnInit } from '@angular/core';
import {NgxXml2jsonService} from "ngx-xml2json";
import{CustomerAccountModel} from "./Customer-Account.model";

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css']
})
export class CustomerAccountComponent implements OnInit{
  xml;
  obj;
  model=new CustomerAccountModel();
  constructor(
    private ngxXml2jsonService:NgxXml2jsonService,
    private CustomerAccountService:CustomerAccountService
  ){}
  ngOnInit(){
    this.CustomerAccountService.getData().subscribe(Res=>{
      this.obj=Res;
      
      this.model.Business=this.obj[6].business;
      this.model.Department = this.obj[14].department;
      this.model.Role = this.obj[26].role;
    });
   }
 }
 
