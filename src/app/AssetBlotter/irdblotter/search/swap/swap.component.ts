import { SwapRec } from './model/swapRec.model';
import { AssetblotterService } from './../../../service/assetblotter.service';

import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { SwapPay } from './model/swapPay.model';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css']
})
export class SwapComponent implements OnInit {

  
  obj;
  swapPay = new SwapPay();
  swapRec = new SwapRec();
  test = "hi";
  constructor(private ngxXml2jsonService: NgxXml2jsonService, private assetblotterService:AssetblotterService) { }

  ngOnInit() {
    this.assetblotterService.getSwapPay().subscribe(Res => {
      this.obj = Res;
      this.swapPay.payAccrualFreq = this.obj[0].payAccrualFreq;
      this.swapPay.payAmortType = this.obj[1].payAmortType;
      this.swapPay.payCompounding = this.obj[2].payCompounding;
      this.swapPay.payCurrency = this.obj[3].payCurrency;
      this.swapPay.payDayCount = this.obj[4].payDayCount;
      this.swapPay.payDiscountCurve = this.obj[5].payDiscountCurve;
      this.swapPay.payFixedQuote = this.obj[6].payFixedQuote;
      this.swapPay.payLegType = this.obj[7].payLegType;
      this.swapPay.payMarketIndex = this.obj[8].payMarketIndex;
      this.swapPay.payNotional = this.obj[9].payNotional;
      this.swapPay.payPayFreq = this.obj[10].payPayFreq;
      this.swapPay.payResetFreq = this.obj[11].payResetFreq;
      this.swapPay.subProduct = this.obj[12].subProduct;
      //console.log(this.swapPay);
    });
    this.assetblotterService.getSwapRec().subscribe(Res => {
      this.obj = Res;
      
      this.swapRec.recAccrualFreq = this.obj[0].recAccrualFreq;
      this.swapRec.recAmortType = this.obj[1].recAmortType;
      this.swapRec.recCompounding = this.obj[2].recCompounding;
      this.swapRec.recCurrency = this.obj[3].recCurrency;
      this.swapRec.recDayCount = this.obj[4].recDayCount;
      this.swapRec.recDiscountCurve = this.obj[5].recDiscountCurve;
      this.swapRec.recFixedQuote = this.obj[6].recFixedQuote;
      this.swapRec.recLegType = this.obj[7].recLegType;
      this.swapRec.recMarketIndex = this.obj[8].recMarketIndex;
      this.swapRec.recNotional = this.obj[9].recNotional;
      this.swapRec.recPayFreq = this.obj[10].recPayFreq;
      this.swapRec.recResetFreq = this.obj[11].recResetFreq;
      
      console.log(this.swapRec);
    });
  }
}
