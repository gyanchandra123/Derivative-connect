import { CapModelSavingService } from './savingcapfloor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savingcapfloor',
  templateUrl: './savingcapfloor.component.html',
  styleUrls: ['./savingcapfloor.component.css']
})
export class SavingcapfloorComponent implements OnInit {

  constructor(private capModelSavingService:CapModelSavingService) { }

  ngOnInit() {
    this.capModelSavingService.onSavingCapFloor().subscribe(res=>{
      console.log(res);
    })

  }

  

}
