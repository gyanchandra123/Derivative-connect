import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-insert-in-resets',
  templateUrl: './insert-in-resets.component.html',
  styleUrls: ['./insert-in-resets.component.css']
})
export class InsertInResetsComponent implements OnInit {

  isPopupOpened = true;
  constructor(
    private dialogRef: MatDialogRef<InsertInResetsComponent>,
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
