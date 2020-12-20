import { ScheduleService } from './schedule.service';
import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { ScheduleModel } from './schedule.model';
import { MatDialog } from '@angular/material';
import { RootPaymentScheduleComponent } from '../../Common/schedule/root-payment-schedule/root-payment-schedule.component';
import { RootRecievedScheduleComponent } from '../../Common/schedule/root-recieved-schedule/root-recieved-schedule.component';
import { PayDataService } from '../swapticket/pay-data.service';
import { SwapTicketService } from '../swapticket/swapticket.service';
import { PayFieldValues } from '../swapticket/pay-field-values';
import { RecFieldValues } from '../swapticket/rec-field-values';
import { RecDataService } from '../swapticket/rec-data.service';



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  obj;
  xml;
  isPopupOpened = true;
  model = new ScheduleModel();  

  payfieldsValue = new PayFieldValues();
  private static instance: RecFieldValues;
  recFieldValues = RecFieldValues.getInstance();

  insertSwapModelObjects;


  constructor(private scheduleService: ScheduleService,
    private dialog?: MatDialog,
    private payData?: PayDataService,
    public recData?: RecDataService,
    private swapTicketService?: SwapTicketService,

  ) { }



  ngOnInit() {
    this.scheduleService.getData().subscribe(res => {
      this.obj = res;
      this.model.cmbPayPVCurrency = this.obj[0].currency;
      this.model.cmbPayCurve = this.obj[1].discountCurve;

      this.model.cmbRecPVCurrency = this.obj[0].currency;
      this.model.cmbRecCurve = this.obj[1].discountCurve;
    });
  }


  onPaymtScheduleButtonClick() {

    /* 
         @related with retrieving the values from the service which contains the pay form fields. 
     */
    this.payData.payCurrentData.subscribe(message => this.payfieldsValue = message);

    console.log(this.payfieldsValue.payStatus, this.payfieldsValue.payTenor,
      this.payfieldsValue.payNotional, this.payfieldsValue.payCouponStartDate,
      this.payfieldsValue.payCouponEndDate, this.payfieldsValue.payFixedQuote,
      this.payfieldsValue.payDayCount, this.payfieldsValue.payAccuralFreq);

    console.log(this.payfieldsValue);

    /* 
      @ calling post method from service class  "SwapTicketService"
    */
    /*  this.swapTicketService.postData(this.payfieldsValue).subscribe
    (
     RetrieveInsertSwapModelData=>
     {
       this.insertSwapModelObjects=RetrieveInsertSwapModelData;
     }
    ) */









    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(RootPaymentScheduleComponent, {
      data: {},
      /*  width: '448px',
      height: '300px',  */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }




  onRecievedScheduleButtonClick() {
    /* 
     @related with retrieving the values from the service which contains in the recieve form fields. 
 */
    this.recData.currentModelData.subscribe(message => {
        this.recFieldValues = message;         
    },

    );
    


    this.isPopupOpened = true;
    
    const dialogRef = this.dialog.open(RootRecievedScheduleComponent, {
      data: {},
      /*  width: '448px',
      height: '300px',  */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }


}