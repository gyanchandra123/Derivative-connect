import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material'; 
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
/* import { InsertRecScheduleComponent } from '../insert-rec-schedule/insert-rec-schedule.component'; */
/* import { ResetScheduleComponent } from '../reset-schedule/reset-schedule.component'; */
import { HelpComponent } from '../help/help.component';
import { ExportScheduleComponent } from '../export-schedule/export-schedule.component'; 
import { ResetPaymentScheduleComponent } from '../reset-payment-schedule/reset-payment-schedule.component'; 
import { InsertPayScheduleComponent } from '../insert-pay-schedule/insert-pay-schedule.component';
import { StubPayResetsComponent } from '../stub-pay-resets/stub-pay-resets.component';
import { InsertSwapPaymentService } from '../service/insert-swap-payment.service';

@Component({
  selector: 'app-root-payment-schedule',
  templateUrl: './root-payment-schedule.component.html',
  styleUrls: ['./root-payment-schedule.component.css']
})
export class RootPaymentScheduleComponent implements OnInit {
  isPopupOpened = true;

  compoundingPeriod;
  settlementPeriod;
  AuthorizationPeriod;
  insertedServicePaymentList;
  totalPaymentAmount;
  totalPVAmount;

  constructor( private dialogRef: MatDialogRef<RootPaymentScheduleComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
              private dialog?: MatDialog,
              private _insertServiceObject?: InsertSwapPaymentService,) { }

  ngOnInit() {
     
    this.insertedServicePaymentList = this._insertServiceObject.getAllInsertedPaymentRows();

    /* for (let i = 0; i < this. insertedServicePaymentList.length; i++)
      console.log(this. insertedServicePaymentList[i].couponStartDate); */

      this.compoundingPeriod=this.insertedServicePaymentList[0].CompoundingPeriod;
      this.settlementPeriod=this.compoundingPeriod;
      this.AuthorizationPeriod=this.compoundingPeriod;
      this.totalPaymentAmount=this.insertedServicePaymentList[0].totalPaymentAmount;
      this.totalPVAmount=this.insertedServicePaymentList[0].totalPVAmount;
  }

    /* getAllValueFromInsertService() {
    this. insertedServicePaymentList = this._insertServiceObject.getAllInsertedRows();
    console.log("test:" + this. insertedServicePaymentList);
  } */

 

  insert() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(InsertPayScheduleComponent, {
      data: {},
      /* width: '448px',
      height: '300px', */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  Resets() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(ResetPaymentScheduleComponent, {
      data: {},
      /* width: '448px',
      height: '300px', */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  onHelpClick() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(HelpComponent, {
      data: {},
      /* width: '448px',
      height: '300px', */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  onExportClick() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(ExportScheduleComponent, {
      data: {},
      /* width: '448px',
      height: '300px', */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  onStubResetsClick() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(StubPayResetsComponent, {
      data: {},
      /* width: '448px',
      height: '300px', */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });

  }

  onCrossClick(){
    this.dialogRef.close();
  }

  onOkclick(){
    this.dialogRef.close();
  }

  onCancelclick(){
    this.dialogRef.close();
  }
  
 /*  onCancelClick() {
    this.dialogRef.close();
  } */

}
