 
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-export-schedule',
  templateUrl: './export-schedule.component.html',
  styleUrls: ['./export-schedule.component.css']
})
export class ExportScheduleComponent implements OnInit {

  
  isPopupOpened=true;
  constructor(
    private dialogRef: MatDialogRef<ExportScheduleComponent>,
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
