import { SchedulesService } from './schedules.service';
import { Component, OnInit } from '@angular/core';
import { SchedulesModel } from './../schedules/schedules.model';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

    obj;

  model= new SchedulesModel();
  
  constructor(private schedulesService:SchedulesService) { }

  ngOnInit() {
    this.schedulesService.getData().subscribe(res=>{
      this.obj=res;

      this.model.scheduleCurrency=this.obj[7].id;
      this.model.scheduleCurve=this.obj[1].id;
    })
    
     
 setTimeout(()=> {

},1000); 

}


}


