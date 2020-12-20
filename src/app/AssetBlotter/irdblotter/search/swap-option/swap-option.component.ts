import { SwapOptionRec } from './model/swapOptionRec.model';
import { SwapOptionPay } from './model/swapOptionPay.model';
import { AssetblotterService } from './../../../service/assetblotter.service';
import { Component, OnInit } from '@angular/core';
import { SwapOption } from './model/swapoption.model';

@Component({
  selector: 'app-swap-option',
  templateUrl: './swap-option.component.html',
  styleUrls: ['./swap-option.component.css']
})
export class SwapOptionComponent implements OnInit {

  obj;
  swpaOption = new SwapOption();
  swapOptionPay = new SwapOptionPay();
  swapOptionRec = new SwapOptionRec();
  constructor(private assetblotterService:AssetblotterService) { }

  ngOnInit() 
  {
    //swapOption top fields service
    this.assetblotterService.getSwapOption().subscribe(res =>{
      this.obj = res;
      this.swpaOption.expiryDate = this.obj[0].expiryDate;
      this.swpaOption.optionStyle = this.obj[1].optionStyle;
      this.swpaOption.optionType = this.obj[2].optionType;
      this.swpaOption.strike = this.obj[3].strike;
      this.swpaOption.subProductOption = this.obj[4].subProductOption;
    });

    this.assetblotterService.getSwapOptionPay().subscribe(res =>{
      this.obj = res;
      this.swapOptionPay.notionalOption = this.obj[0].notionalOption;
      this.swapOptionPay.payAccrualFreqOption = this.obj[1].payAccrualFreqOption;
      this.swapOptionPay.payAmortTypeOption = this.obj[2].payAmortTypeOption;
      this.swapOptionPay.payCompoundingOption = this.obj[3].payCompoundingOption;
      this.swapOptionPay.payCurrencyOption = this.obj[4].payCurrencyOption;
      this.swapOptionPay.payDayCountOption = this.obj[5].payDayCountOption;
      this.swapOptionPay.payDiscountCurveOption = this.obj[6].payDiscountCurveOption;
      this.swapOptionPay.payFixedQuoteOption = this.obj[7].payFixedQuoteOption;
      this.swapOptionPay.payLegTypeOption = this.obj[8].payLegTypeOption;
      this.swapOptionPay.payMarketIndexOption = this.obj[9].payMarketIndexOption;
      this.swapOptionPay.payPayFreqOption = this.obj[10].payPayFreqOption;
      this.swapOptionPay.payResetFreqOption = this.obj[11].payResetFreqOption;
    });

    this.assetblotterService.getSwapOptionRec().subscribe(res =>{
      this.obj = res;
      this.swapOptionRec.recNotionalOption = this.obj[0].recNotionalOption;
      this.swapOptionRec.recAccrualFreqOption = this.obj[1].recAccrualFreqOption;
      this.swapOptionRec.recAmortTypeOption = this.obj[2].recAmortTypeOption;
      this.swapOptionRec.recCompoundingOption = this.obj[3].recCompoundingOption;
      this.swapOptionRec.recCurrencyOption = this.obj[4].recCurrencyOption;
      this.swapOptionRec.recDayCountOption = this.obj[5].recDayCountOption;
      this.swapOptionRec.recDiscountCurveOption = this.obj[6].recDiscountCurveOption;
      this.swapOptionRec.recFixedQuoteOption = this.obj[7].recFixedQuoteOption;
      this.swapOptionRec.recLegTypeOption = this.obj[8].recLegTypeOption;
      this.swapOptionRec.recMarketIndexOption = this.obj[9].recMarketIndexOption;
      this.swapOptionRec.recPayFreqOption = this.obj[10].recPayFreqOption;
      this.swapOptionRec.recResetFreqOption = this.obj[11].recResetFreqOption;
    });
  }

}
