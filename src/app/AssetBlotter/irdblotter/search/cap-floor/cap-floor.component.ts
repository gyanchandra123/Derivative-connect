import { CapFloorModel } from './model/cap-floor.model';
import { AssetblotterService } from './../../../service/assetblotter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cap-floor',
  templateUrl: './cap-floor.component.html',
  styleUrls: ['./cap-floor.component.css']
})
export class CapFloorComponent implements OnInit {
obj;
capFloor = new CapFloorModel
  constructor(private assetblotterService:AssetblotterService) { }

  ngOnInit() {
    this.assetblotterService.getCapFloor().subscribe(res =>{
      this.obj = res;
      this.capFloor.accrualFreqCaps = this.obj[0].accrualFreqCaps;
      this.capFloor.amortTypeCaps = this.obj[1].amortTypeCaps;
      this.capFloor.floorTypeCaps = this.obj[2].floorTypeCaps;
      this.capFloor.currencyCaps = this.obj[3].currencyCaps;
      this.capFloor.dayCountCaps = this.obj[4].dayCountCaps;
      this.capFloor.discountCurveCaps = this.obj[5].discountCurveCaps;
      this.capFloor.marketIndexCaps = this.obj[6].marketIndexCaps;
      this.capFloor.notionalCaps = this.obj[7].notionalCaps;
      this.capFloor.resetFreqCaps = this.obj[8].resetFreqCaps;
      this.capFloor.strikeCaps = this.obj[9].strikeCaps;
      this.capFloor.subProductCaps = this.obj[10].subProductCaps;
    });
  }

}
