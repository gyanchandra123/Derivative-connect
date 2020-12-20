import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog } from '@angular/material';
import { HelpComponent } from '../help/help.component';
import { StubResetService } from '../service/stub-reset.service';

@Component({
  selector: 'app-stub-pay-resets',
  templateUrl: './stub-pay-resets.component.html',
  styleUrls: ['./stub-pay-resets.component.css']
})
export class StubPayResetsComponent implements OnInit {

  isPopupOpened = true;
  StubResetServiceList;

  constructor(
    private dialogRef: MatDialogRef<StubPayResetsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog?: MatDialog,
    private StubResetServiceObject?: StubResetService) { }

    ngOnInit() {
      this.StubResetServiceList = this.StubResetServiceObject.getAllInsertedRows();  
    }
  
  
    okButtonClick() {
      this.dialogRef.close();
    }
  
    onCancelClick() {
      this.dialogRef.close();
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

}
