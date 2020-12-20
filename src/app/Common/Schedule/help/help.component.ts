 

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
 

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor( 
    private dialogRef: MatDialogRef<HelpComponent>,   
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onSubmit() {
    
    this.dialogRef.close();
  }

  onNoClick(){
    this.dialogRef.close();
  }

  onClick(){
    this.dialogRef.close();
  }
  onCancelClick(){
    this.dialogRef.close();
}
}
