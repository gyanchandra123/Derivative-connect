import { Component, OnInit } from '@angular/core';
import { SwapTicketSavingService } from './swapticketsaving.service';

@Component({
  selector: 'app-swapticketsave',
  /* templateUrl: './swapticketsave.component.html',
  styleUrls: ['./swapticketsave.component.css'] */
  template:""
})
export class SwapticketsaveComponent implements OnInit {

  constructor(private swapTicketSavingService:SwapTicketSavingService) { }

  ngOnInit() {
    console.log(this.swapTicketSavingService.swapAssetModel);
    this.swapTicketSavingService.insertSwapData().subscribe(res=>
      {
        console.log(res);
      });

  }

}
