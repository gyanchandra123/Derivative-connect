import { Search } from './model/search.model';
import { AssetblotterService } from './../../service/assetblotter.service';

import { Component, OnInit } from '@angular/core';

import { SearchresultdatasharingService } from '../../service/searchresultdatasharing.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  obj;
  search = new Search();
  products=[];
  constructor(private assetblotterService:AssetblotterService, 
    private searchresultdatasharingService:SearchresultdatasharingService) { }

  ngOnInit() {
    this.assetblotterService.getSearch().subscribe(res => {
      this.obj = res;

      this.search.broker = this.obj[0].broker;
      this.search.currency = this.obj[1].currency;
      this.search.customer = this.obj[2].customer;
      this.search.externalSystem = this.obj[3].externalSystem;
      this.search.firmAccount = this.obj[4].firmAccount;
      this.search.flowStatus = this.obj[5].flowStatus;
      this.search.legalEntity = this.obj[6].legalEntity;
      this.search.location = this.obj[7].location;
      this.search.longName = this.obj[8].longName;
      this.search.matchStatus = this.obj[9].matchStatus;
      this.search.productMultiSelect = this.obj[10].products;
      this.search.salesPerson = this.obj[11].salesPerson;
      this.search.trader = this.obj[12].trader;
      this.search.tradeStatus = this.obj[13].tradeStatus;
      this.search.tradeType = this.obj[14].tradeType;
      
      
      //console.log(this.obj);
    });
    
  }

  getProduct(product:string)
  {
    console.log(product);
    for(var i = 0 ;i < this.products.length;i++)
    {
      this.products.pop();
    }
    this.products.push(product);
    console.log(this.products);
    this.searchresultdatasharingService.changeMessage(this.products);
  }
  
}
