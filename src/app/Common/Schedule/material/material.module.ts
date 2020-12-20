import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatDialogModule,
  MatSelectModule,
  MatCardModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatTableModule,
  
} from '@angular/material';

const Material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatDialogModule,
  MatCardModule,
  MatDialogModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatSelectModule,
  MatToolbarModule];

@NgModule({
  
  imports: [Material],
  exports: [Material]

})
export class MaterialModule { }
