import { AssetblotterService } from './../../../service/assetblotter.service';
import { Component, OnInit } from '@angular/core';
import { FraModel } from './model/fra.model';

@Component({
  selector: 'app-fra',
  templateUrl: './fra.component.html',
  styleUrls: ['./fra.component.css']
})
export class FraComponent implements OnInit {
obj;
fra = new FraModel();
  constructor(private assetblotterService:AssetblotterService) { }

  ngOnInit() {
    this.assetblotterService.getFra().subscribe(res =>{
      this.obj = res;
      this.fra.agreedRateFra = this.obj[0].agreedRateFra;
      this.fra.currencyFra = this.obj[1].currencyFra;
      this.fra.dayCountFra = this.obj[2].dayCountFra;
      this.fra.discountCurveFra = this.obj[3].discountCurveFra;
      this.fra.marketIndexFra = this.obj[4].marketIndexFra;
      this.fra.notionalFra = this.obj[5].notionalFra;
      this.fra.rateTypeFra= this.obj[6].rateTypeFra;
    });

  }

}
