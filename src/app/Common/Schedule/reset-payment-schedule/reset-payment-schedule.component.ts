import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HelpComponent } from '../help/help.component'; 
/* import { ResetsService } from '../service/resets-service.service' */
import { ResetPaymentService } from '../service/reset-payment.service';
import { InsertInPayResetsComponent } from '../insert-in-pay-resets/insert-in-pay-resets.component';
 
 
@Component({
  selector: 'app-reset-payment-schedule',
  templateUrl: './reset-payment-schedule.component.html',
  styleUrls: ['./reset-payment-schedule.component.css']
})
export class ResetPaymentScheduleComponent implements OnInit {

  isPopupOpened=true;
  ResetsServiceList;

  constructor(private dialogRef: MatDialogRef<ResetPaymentScheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog?: MatDialog,
    private ResetsServiceObject?:ResetPaymentService) { }

  ngOnInit() {
    this.ResetsServiceList=this.ResetsServiceObject.getAllInsertedPaymentRows();
  }

  onNoClick() {
    this.dialogRef.close();
  }

  okButton() {
    this.dialogRef.close();
  }

  onCancel()
  {
    this.dialogRef.close();
  }

  onCrossClick(){
    this.dialogRef.close();
  }

  onHelpClick(){
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

  onInsertClick(){
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(InsertInPayResetsComponent, {
      data: {},
      /* width: '448px',
      height: '300px', */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

}

