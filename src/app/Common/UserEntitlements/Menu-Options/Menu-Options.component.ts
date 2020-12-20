import {MenuOptionsService} from './Menu-Options.service';


import { Component, OnInit } from '@angular/core';

import {NgxXml2jsonService} from "ngx-xml2json";
import{MenuOptionsModel} from "./Menu-Options.model";

@Component({
  selector: 'app-menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.css']
})
export class MenuComponent implements OnInit{
  xml;
  obj;
  model=new MenuOptionsModel();
  constructor(
    private ngxXml2jsonService:NgxXml2jsonService,
    private MenuOptionsService:MenuOptionsService
  ){}
  ngOnInit(){
    this.MenuOptionsService.getData().subscribe(Res=>{
      this.obj=Res;
      this.model.Business=this.obj[10].business;
      this.model.Department = this.obj[18].department;
      this.model.Role = this.obj[30].role;
     
    });
     }
 }
 
