import { AssetBlotComponent } from './AssetBlotter/asset-blot/asset-blot.component';
import { AssetblotterService } from './AssetBlotter/service/assetblotter.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { IRDBlotterComponent } from './AssetBlotter/irdblotter/irdblotter.component';
import { SearchComponent } from './AssetBlotter/irdblotter/search/search.component';
import { SwapComponent } from './AssetBlotter/irdblotter/search/swap/swap.component';
import { SwapOptionComponent } from './AssetBlotter/irdblotter/search/swap-option/swap-option.component';
import { ResultsComponent } from './AssetBlotter/irdblotter/results/results.component';
import { FraComponent } from './AssetBlotter/irdblotter/search/fra/fra.component';
import { CapFloorComponent } from './AssetBlotter/irdblotter/search/cap-floor/cap-floor.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SchedulesComponent } from './CapFloor/schedules/schedules.component';
import { FrontPageComponent } from './SwapTicket/front-page/front-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './Common/schedule/material/material.module';
import { InsertSwapPaymentService } from './Common/schedule/service/insert-swap-payment.service';
import { InsertSwapService } from './Common/schedule/service/insert-swap.service';
import { ResetPaymentService } from './Common/schedule/service/reset-payment.service';
import { ResetRecievingService } from './Common/schedule/service/reset-recieving.service';
import { StubResetService } from './Common/schedule/service/stub-reset.service';
import { ExportScheduleComponent } from './Common/schedule/export-schedule/export-schedule.component';
import { HelpComponent } from './Common/schedule/help/help.component';
import { InsertInPayResetsComponent } from './Common/schedule/insert-in-pay-resets/insert-in-pay-resets.component';
import { InsertInResetsComponent } from './Common/schedule/insert-in-resets/insert-in-resets.component';
import { InsertPayScheduleComponent } from './Common/schedule/insert-pay-schedule/insert-pay-schedule.component';
import { InsertRecScheduleComponent } from './Common/schedule/insert-rec-schedule/insert-rec-schedule.component';
import { ResetPaymentScheduleComponent } from './Common/schedule/reset-payment-schedule/reset-payment-schedule.component';
import { ResetRecievedScheduleComponent } from './Common/schedule/reset-recieved-schedule/reset-recieved-schedule.component';
import { RootPaymentScheduleComponent } from './Common/schedule/root-payment-schedule/root-payment-schedule.component';
import { StubPayResetsComponent } from './Common/schedule/stub-pay-resets/stub-pay-resets.component';
import { StubResetsComponent } from './Common/schedule/stub-resets/stub-resets.component';
import { RootRecievedScheduleComponent } from './Common/schedule/root-recieved-schedule/root-recieved-schedule.component';
import { SwapresultComponent } from './AssetBlotter/irdblotter/results/swapresult/swapresult.component';
import { AdditionalFieldsService } from './CapFloor/additional-fields/additional-fields.service';
import { SavingcapfloorComponent } from './CapFloor/savingcapfloor/savingcapfloor.component';
import { DatePipe } from '@angular/common';
import { EmployService } from './Common/UserEntitlements/shared/employee.service';
import { EmploylistResolveGuardService } from './Common/UserEntitlements/RouterGuards/employlist-resolve-guard.service';
import { DisplayEmployeeComponent } from './Common/UserEntitlements/display-employee/display-employee.component';
import { AccordionComponent } from './Common/UserEntitlements/shared/accordion/accordion.component';
import { EmployeeDetailsComponent } from './Common/UserEntitlements/employee-details/employee-details.component';
import { PageNotFoundComponent } from './Common/UserEntitlements/page-not-found/page-not-found.component';
import { employDetailsCanActivateRouteService } from './Common/UserEntitlements/RouterGuards/employDetails-CanActivateRoute.service';
import { UserEntitlementComponent } from './Common/UserEntitlements/UserEntitlement/UserEntitlement.component';
import { ConfirmEqualValidatorDirective } from './Common/UserEntitlements/shared/confirm-equal-validator.directive';
import { SelectRequiredValidatorDirective } from './Common/UserEntitlements/shared/select-required-validator.directive';
import { EmployeeFilterPipe } from './Common/UserEntitlements/shared/employeeFilterPipe';
import { createEmployCanDeActivateRouterGuardSerice } from './Common/UserEntitlements/RouterGuards/createEmploy-canDeActivateRouterGuard.service';



//suchi imports


@NgModule({
  declarations: [
    AppComponent,
    SwapresultComponent,
    //SwapticketComponent
    routingComponents,
    IRDBlotterComponent,
    SearchComponent,
    SwapComponent,
    SwapOptionComponent,
    ResultsComponent,
    FraComponent,
    CapFloorComponent,
    AssetBlotComponent,

    //capfloor schedule 
    SchedulesComponent,
    FrontPageComponent,

    //gyan
    DisplayEmployeeComponent,
    AccordionComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    ConfirmEqualValidatorDirective,
    SelectRequiredValidatorDirective,
    EmployeeFilterPipe,
    ExportScheduleComponent,
    HelpComponent,
    InsertInPayResetsComponent,
    InsertInResetsComponent,
    InsertPayScheduleComponent,
    InsertRecScheduleComponent,
    ResetPaymentScheduleComponent,
    ResetRecievedScheduleComponent,
    RootPaymentScheduleComponent,
    StubPayResetsComponent,
    StubResetsComponent,
    RootRecievedScheduleComponent,
    SavingcapfloorComponent,
    UserEntitlementComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],


  entryComponents: [HelpComponent, ResetRecievedScheduleComponent,
    InsertInResetsComponent, InsertRecScheduleComponent, StubResetsComponent,
    ExportScheduleComponent, RootRecievedScheduleComponent, ResetPaymentScheduleComponent,
    InsertInPayResetsComponent, InsertPayScheduleComponent, StubPayResetsComponent, RootPaymentScheduleComponent

  ],



  providers: [AssetblotterService,
    //gyan's service
    EmployService,
    EmploylistResolveGuardService,
    employDetailsCanActivateRouteService,
    createEmployCanDeActivateRouterGuardSerice,
    InsertSwapPaymentService,
    InsertSwapService,
    ResetPaymentService,
    ResetRecievingService,
    StubResetService,
    DatePipe,
    AdditionalFieldsService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
