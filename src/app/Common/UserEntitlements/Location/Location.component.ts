import {LocationService} from './Location.service'


import { Component, OnInit } from '@angular/core';

import {NgxXml2jsonService} from "ngx-xml2json";
import{LocationModel} from "./Location.model";

@Component({
  selector: 'app-Location',
  templateUrl: './Location.component.html',
  styleUrls: ['./Location.component.css']
})
export class LocationComponent implements OnInit{
  xml;
  obj;
  model=new LocationModel();
  constructor(
    private ngxXml2jsonService:NgxXml2jsonService,
    private LocationService:LocationService
  ){}
  ngOnInit(){
    this.LocationService.getData().subscribe(Res=>{
      this.obj=Res;
      this.model.Business=this.obj[9].business;
      this.model.Department = this.obj[17].department;
      this.model.Role = this.obj[29].role;
    });
   }
 }
 
