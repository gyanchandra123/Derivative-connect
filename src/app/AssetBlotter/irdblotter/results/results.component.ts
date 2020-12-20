import { AssetblotterService } from './../../service/assetblotter.service';
import { Component, OnInit } from '@angular/core';
import { SearchresultdatasharingService } from '../../service/searchresultdatasharing.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
 selectedProduct;
 swap = true;
 swapoption = true;
 fra = true;
 capfloor = true;
 boand = true;
 boandfuture = true;
 boandFO = true;
 MMFuture = true;
 MMFO = true;
  constructor(private searchresultdatasharingService:SearchresultdatasharingService) { }

  ngOnInit() {
    this.searchresultdatasharingService.currentMessage.subscribe(res =>{
      this.selectedProduct = res;
      console.log(this.selectedProduct)
    });
    for(var i = 0;i<this.selectedProduct.length;i++)
    {
      if(this.selectedProduct[i] == 'Bond')this.boand = false;
      if(this.selectedProduct[i] == 'BondFuture')this.boandfuture = false;
      if(this.selectedProduct[i] == 'BondFutureOption')this.boandFO = false;
      if(this.selectedProduct[i] == 'CapFloor')this.capfloor = false;
      if(this.selectedProduct[i] == 'Fra')this.fra = false;
      if(this.selectedProduct[i] == 'MMFuture')this.MMFuture = false;
      if(this.selectedProduct[i] == 'MMFutureOption')this.MMFO = false;
      if(this.selectedProduct[i] == 'Swap')this.swap = false;
      if(this.selectedProduct[i] == 'SwapOption')this.swapoption = false;
    }
  }
  

}
