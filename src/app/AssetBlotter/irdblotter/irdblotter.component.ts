import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-irdblotter',
  templateUrl: './irdblotter.component.html',
  styleUrls: ['./irdblotter.component.css']
})
export class IRDBlotterComponent implements OnInit {

  now:number;

  constructor() {
  
    setInterval(()=>{
   this.now= Date.now();
    },1)
   }

  ngOnInit() {
  }

}
