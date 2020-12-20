import {LegalEntityService} from './Legal-Entity.service';


import { Component, OnInit } from '@angular/core';

import {NgxXml2jsonService} from "ngx-xml2json";
import{LegalEntityModel} from "./Legal-Entity.model";

@Component({
  selector: 'app-legal-entity',
  templateUrl: './legal-entity.component.html',
  styleUrls: ['./legal-entity.component.css']
})
export class LegalEntityComponent implements OnInit{
  xml;
  obj;
  model=new LegalEntityModel();
  constructor(
    private ngxXml2jsonService:NgxXml2jsonService,
    private LegalEntityService:LegalEntityService
  ){}
  ngOnInit(){
    this.LegalEntityService.getData().subscribe(Res=>{
      this.obj=Res;
      this.model.Business=this.obj[8].business;
      this.model.Department = this.obj[16].department;
      this.model.Role = this.obj[28].role;
     
    });
     
   }
 }
 
