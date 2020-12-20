import { AssetblotterService } from './../../../service/assetblotter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swapresult',
  templateUrl: './swapresult.component.html',
  styleUrls: ['./swapresult.component.css']
})
export class SwapresultComponent implements OnInit {

  columns;
  data;
  constructor(private assetblotterService:AssetblotterService) { }

  ngOnInit() {
    
    this.assetblotterService.getSwapResult().subscribe(res =>{
      this.columns = res[0].column;
      
      this.data = res[1].swapResultData;
    });
  }

}
