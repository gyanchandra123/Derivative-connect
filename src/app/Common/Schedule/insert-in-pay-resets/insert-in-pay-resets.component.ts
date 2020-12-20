import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-insert-in-pay-resets',
  templateUrl: './insert-in-pay-resets.component.html',
  styleUrls: ['./insert-in-pay-resets.component.css']
})
export class InsertInPayResetsComponent implements OnInit {

  
  isPopupOpened = true;

 constructor(
    private dialogRef: MatDialogRef<InsertInPayResetsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
   ) { }

  ngOnInit() {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close();
  }

  onCancel()
  {
    this.dialogRef.close();
  }

}

