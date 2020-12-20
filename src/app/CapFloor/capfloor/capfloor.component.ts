import { CapFloorModel } from './capfloor.model';
import { CapFloorService } from './capfloor.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-capfloor',
  templateUrl: './capfloor.component.html',
  styleUrls: ['./capfloor.component.css']
})
export class CapfloorComponent implements OnInit {

  obj;
  now:number;

  model=new CapFloorModel();

  constructor(private capFloorService:CapFloorService){
    setInterval(()=>{
      this.now=Date.now();
    },1);
  }

  registrationform=new FormGroup({      
    currencies:new FormControl(''),
    tenor:new FormControl(''),
    notional:new FormControl(''),
    cfsubtype:new FormControl(''),
    CapStartDate:new FormControl(''),
    capEndDate:new FormControl(''),
    startRoll:new FormControl(''),
    endRoll:new FormControl(''),
    startStub:new FormControl(''),
    endStub:new FormControl(''),
    startStubM:new FormControl(''),
    endStubM:new FormControl(''),
    buyFlag:new FormControl(''),
    capfloor:new FormControl('')
});


onSubmit(){
   
  console.warn(this.registrationform.value)
   }
   

 ngOnInit(){
   this.capFloorService.getData().subscribe(res=>{
     this.obj=res;

     this.model.cmbCurrency=this.obj[0].id;
     this.model.cmbCfSubType=this.obj[1].id;
     this.model.cmbBuyFlag=this.obj[2].id;
     this.model.cmbCapFloorType=this.obj[3].id; 
     this.model.cmbStartDateRollFlag=this.obj[4].id;
     this.model.cmbEndDateRollFlag=this.obj[5].id;

     this.model.txtTenor=this.obj[6].capfields[0];
     this.model.txtNotional=this.obj[6].capfields[1];
     this.model.txtCapsStartDate=this.obj[6].capfields[2];
     this.model.txtCapsEndDate=this.obj[6].capfields[3];
 
     
     this.model.txtStartStubDate=this.obj[6].capfields[4];
     this.model.txtBackStubDate=this.obj[6].capfields[5];
     this.model.txtFrontStubManualRate=this.obj[6].capfields[6];
     this.model.txtBackStubManualRate=this.obj[6].capfields[7];

     
     this.registrationform=new FormGroup({
      currencies:new FormControl( this.model.cmbCurrency[0]),
      tenor:new FormControl(this.model.txtTenor),
      notional:new FormControl(this.model.txtNotional),
      cfsubtype:new FormControl(this.model.cmbCfSubType[0]),
      CapStartDate:new FormControl(this.model.txtCapsStartDate),
      capEndDate:new FormControl(this.model.txtCapsEndDate),
      startRoll:new FormControl(this.model.cmbStartDateRollFlag[0]),
      endRoll:new FormControl(this.model.cmbEndDateRollFlag[0]),
      startStub:new FormControl(this.model.txtStartStubDate),
      endStub:new FormControl(this.model.txtBackStubDate),
      startStubM:new FormControl(this.model.txtFrontStubManualRate),
      endStubM:new FormControl(this.model.txtBackStubManualRate),
      buyFlag:new FormControl(this.model.cmbBuyFlag[0]),
      capfloor:new FormControl(this.model.cmbCapFloorType[0])


    });

   })
  

}


}
