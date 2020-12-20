import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
 

@Component({
  selector: 'app-insert-rec-schedule',
  templateUrl: './insert-rec-schedule.component.html',
  styleUrls: ['./insert-rec-schedule.component.css']
})
export class InsertRecScheduleComponent implements OnInit {

  public _contactForm: FormGroup;

  constructor( 
    private dialogRef: MatDialogRef<InsertRecScheduleComponent>,     
    @Inject(MAT_DIALOG_DATA) public data: any
) { }

  ngOnInit() {
  }

  

  onSubmit() {
    / this._contactService.addContact(this._contactForm.value); /
    this.dialogRef.close();
  }

  onCancelClick(){
    this.dialogRef.close();
  }

}
