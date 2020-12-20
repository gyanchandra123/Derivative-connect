import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { InsertRecScheduleComponent } from '../insert-rec-schedule/insert-rec-schedule.component';
/* import { ResetScheduleComponent } from '../reset-schedule/reset-schedule.component'; */
import { HelpComponent } from '../help/help.component';
import { ExportScheduleComponent } from '../export-schedule/export-schedule.component';
import { StubResetsComponent } from '../stub-resets/stub-resets.component';

/* import { ResetPaymentScheduleComponent } from '../reset-payment-schedule/reset-payment-schedule.component';
import { InsertSwapPaymentService } from '../service/insert-swap-payment-service'; */
import { InsertSwapService } from '../service/insert-swap.service';
import { ResetRecievedScheduleComponent } from '../reset-recieved-schedule/reset-recieved-schedule.component';

@Component({
  selector: 'app-root-recieved-schedule',
  templateUrl: './root-recieved-schedule.component.html',
  styleUrls: ['./root-recieved-schedule.component.css']
})
export class RootRecievedScheduleComponent implements OnInit {

  isPopupOpened = true;

  compoundingPeriod;
  settlementPeriod;
  AuthorizationPeriod;
  insertedServiceRecieverList;
  totalPaymentAmount;
  totalPVAmount;  //InsertSwapService   getAllInsertedRecieverRows

  constructor(private dialogRef: MatDialogRef<RootRecievedScheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog?: MatDialog,
    private _insertServiceObject?: InsertSwapService) { }

  ngOnInit() {

    this.insertedServiceRecieverList = this._insertServiceObject.getAllInsertedRecieverRows();

    /* for (let i = 0; i < this. insertedServiceRecieverList.length; i++)
      console.log(this. insertedServiceRecieverList[i].couponStartDate); */

    this.compoundingPeriod = this.insertedServiceRecieverList[0].CompoundingPeriod;
    this.settlementPeriod = this.compoundingPeriod;
    this.AuthorizationPeriod = this.compoundingPeriod;
    this.totalPaymentAmount = this.insertedServiceRecieverList[0].totalPaymentAmount;
    this.totalPVAmount = this.insertedServiceRecieverList[0].totalPVAmount;
  }

  insert() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(InsertRecScheduleComponent, {
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
    const dialogRef = this.dialog.open(ResetRecievedScheduleComponent, {
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
    const dialogRef = this.dialog.open(StubResetsComponent, {
      data: {},
      /* width: '448px',
      height: '300px', */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });

  }

  onCrossClick() {
    this.dialogRef.close();
  }

  onOkclick() {
    this.dialogRef.close();
  }

  onCancelclick() {
    this.dialogRef.close();
  }

  /*  onCancelClick() {
     this.dialogRef.close();
   } */

}
