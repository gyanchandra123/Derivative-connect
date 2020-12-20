import {ProductService} from './Product.service';


import { Component, OnInit } from '@angular/core';

import {NgxXml2jsonService} from "ngx-xml2json";
import{ProductModel} from "./Product.model";

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css']
})
export class ProductComponent implements OnInit{
  xml;
  obj;
  model=new ProductModel();
  constructor(
    private ngxXml2jsonService:NgxXml2jsonService,
    private ProductService:ProductService
  ){}
  ngOnInit(){
    this.ProductService.getData().subscribe(Res=>{
      this.obj=Res;
      this.model.Business=this.obj[11].business;
      this.model.Department = this.obj[19].department;
      this.model.Role = this.obj[31].role;
    });
   }
 }
 
