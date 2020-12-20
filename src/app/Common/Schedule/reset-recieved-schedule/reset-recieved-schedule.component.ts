import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HelpComponent } from '../help/help.component';
import { InsertInResetsComponent } from '../insert-in-resets/insert-in-resets.component'; 
import { ResetRecievingService } from '../service/reset-recieving.service';
 
@Component({
  selector: 'app-reset-recieved-schedule',
  templateUrl: './reset-recieved-schedule.component.html',
  styleUrls: ['./reset-recieved-schedule.component.css']
})
export class ResetRecievedScheduleComponent implements OnInit {

  isPopupOpened=true;
  ResetsServiceList;

  constructor(private dialogRef: MatDialogRef<ResetRecievedScheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog?: MatDialog,
    private ResetsServiceObject?:ResetRecievingService) { }

    ngOnInit() {
      this.ResetsServiceList=this.ResetsServiceObject.getAllInsertedRows();
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
    const dialogRef = this.dialog.open(InsertInResetsComponent, {
      data: {},
      /* width: '448px',
      height: '300px', */
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened = false;
    });
  }

  

}
