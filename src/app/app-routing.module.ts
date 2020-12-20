import { SwapticketsaveComponent } from './SwapTicket/swapticketsave/swapticketsave.component';
import { SwapTicketSavingService } from './SwapTicket/swapticketsave/swapticketsaving.service';

import { AssetBlotComponent } from './AssetBlotter/asset-blot/asset-blot.component';

import { QuickticketComponent } from './CapFloor/quickticket/quickticket.component';
import { CapFloorComponent } from './AssetBlotter/irdblotter/search/cap-floor/cap-floor.component';
import { FraComponent } from './AssetBlotter/irdblotter/search/fra/fra.component';
import { SwapOptionComponent } from './AssetBlotter/irdblotter/search/swap-option/swap-option.component';
import { SwapComponent } from './AssetBlotter/irdblotter/search/swap/swap.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IRDBlotterComponent } from './AssetBlotter/irdblotter/irdblotter.component';
import { SearchComponent } from './AssetBlotter/irdblotter/search/search.component';
import { ResultsComponent } from './AssetBlotter/irdblotter/results/results.component';

//tarun components 
import { CapfloorComponent } from './CapFloor/capfloor/capfloor.component';
import { PaymentsComponent } from './CapFloor/payments/payments.component';
import { ResetsComponent } from './CapFloor/resets/resets.component';
import { AmortizationComponent } from './CapFloor/amortization/amortization.component';
import { SchedulesComponent } from './CapFloor/schedules/schedules.component';
import { TradebasicComponent } from './CapFloor/tradebasic/tradebasic.component';
import { AdditionalFieldsComponent } from './CapFloor/additional-fields/additional-fields.component';
import { FeesComponent } from './CapFloor/fees/fees.component';
import { PartialAssignmentComponent } from './CapFloor/partial-assignment/partial-assignment.component';
import { AssignmentComponent } from './CapFloor/assignment/assignment.component';
import { MarginComponent } from './CapFloor/margin/margin.component';
import { SalesCreditComponent } from './CapFloor/sales-credit/sales-credit.component';


//suchi components 

import { SwapPaymentComponent } from './SwapTicket/swappayment/swappayment.component';
import { SwapResetComponent } from './SwapTicket/swapreset/swapreset.component';
import { PartialasignmentComponent } from './SwapTicket/partialasignment/partialasignment.component';
import { AssignmentsComponent } from './SwapTicket/assignments/assignments.component';
import { MarginsComponent } from './SwapTicket/margins/margins.component';
import { SalescreditComponent } from './SwapTicket/salescredit/salescredit.component';
import { FeeComponent } from './SwapTicket/fee/fee.component';
import { AdditionalfieldsComponent } from './SwapTicket/additionalfields/additionalfields.component';
import { TradeBasicsComponent } from './SwapTicket/tradebasics/tradebasics.component';
import { QuickTicketsComponent } from './SwapTicket/quicktickets/quicktickets.component';
import { ScheduleComponent } from './SwapTicket/schedule/schedule.component';
import { SwapAmortisationComponent } from './SwapTicket/swapamortisation/swapamortisation.component';


//Ramya Components

import { CreateEmployeeComponent } from './Common/UserEntitlements/Profile-Modify/Profile-Modify.component';
import { ListEmployeeComponent } from './Common/UserEntitlements/Profile-Add/Profile-Add.component';
import { UserEntitlementComponent } from './Common/UserEntitlements/UserEntitlement/UserEntitlement.component';
import { LegalEntityComponent } from './Common/UserEntitlements/Legal-Entity/Legal-Entity.component';
import { MenuComponent } from './Common/UserEntitlements/Menu-Options/Menu-Options.component';
import { LocationComponent } from './Common/UserEntitlements/Location/Location.component';
import { ProductComponent } from './Common/UserEntitlements/Product/Product.component';
import { CustomerAccountComponent } from './Common/UserEntitlements/Customer-Account/Customer-Account.component';
import { FirmAccountComponent } from './Common/UserEntitlements/Firm-Account/Firm-Account.component';

//firdose components
import { FrasComponent } from './Fra/fras/fras.component';
import { FraQuickTicketComponent } from './Fra/fra-quick-ticket/fra-quick-ticket.component';
import { FraPartialAssignmentComponent } from './Fra/fra-partial-assignment/fra-partial-assignment.component';
import { FraAssignmentComponent } from './Fra/fra-assignment/fra-assignment.component';
import { FraMarginComponent } from './Fra/fra-margin/fra-margin.component';
import { FraSalesCreditComponent } from './Fra/fra-sales-credit/fra-sales-credit.component';
import { FraFeesComponent } from './Fra/fra-fees/fra-fees.component';
import { FraAdditionalFieldsComponent } from './Fra/fra-additional-fields/fra-additional-fields.component';
import { FraTradeBasicComponent } from './Fra/fra-trade-basic/fra-trade-basic.component';

//archana components

import { SwapoptionQuickticketComponent } from './swapoption/swapoption-quickticket/swapoption-quickticket.component';
import { SwapoptionComponent } from './swapoption/swapoption/swapoption.component';
import { SwapoptionPaymentsComponent } from './swapoption/swapoption-payments/swapoption-payments.component';
import { SwapoptionResetComponent } from './swapoption/swapoption-reset/swapoption-reset.component';
import { SwapoptionAmortisationComponent } from './swapoption/swapoption-amortisation/swapoption-amortisation.component';
import { SwapoptionScheduleComponent } from './swapoption/swapoption-schedule/swapoption-schedule.component';
import { SwapoptionTradebasicComponent } from './swapoption/swapoption-tradebasic/swapoption-tradebasic.component';
import { SwapoptionAdditionalfieldsComponent } from './swapoption/swapoption-additionalfields/swapoption-additionalfields.component';
import { SwapoptionFeesComponent } from './swapoption/swapoption-fees/swapoption-fees.component';
import { SwapoptionSalescreditComponent } from './swapoption/swapoption-salescredit/swapoption-salescredit.component';
import { SwapoptionMarginComponent } from './swapoption/swapoption-margin/swapoption-margin.component';
import { SwapoptionAssignmentComponent } from './swapoption/swapoption-assignment/swapoption-assignment.component';
import { SwapoptionPartialassignmentComponent } from './swapoption/swapoption-partialassignment/swapoption-partialassignment.component';
import { FrontPageComponent } from './SwapTicket/front-page/front-page.component';
import { SwapresultComponent } from './AssetBlotter/irdblotter/results/swapresult/swapresult.component';
import { SwapTicketComponent } from './SwapTicket/SwapTicket/swapticket.component';
import { SavingcapfloorComponent } from './CapFloor/savingcapfloor/savingcapfloor.component';
import { EmploylistResolveGuardService } from './Common/UserEntitlements/RouterGuards/employlist-resolve-guard.service';
import { EmployeeDetailsComponent } from './Common/UserEntitlements/employee-details/employee-details.component';
import { employDetailsCanActivateRouteService } from './Common/UserEntitlements/RouterGuards/employDetails-CanActivateRoute.service';
import { PageNotFoundComponent } from './Common/UserEntitlements/page-not-found/page-not-found.component';
import { createEmployCanDeActivateRouterGuardSerice } from './Common/UserEntitlements/RouterGuards/createEmploy-canDeActivateRouterGuard.service';





const routes: Routes = [
  { path: 'assetblotter', component: AssetBlotComponent },
  {
    path: 'irdBlotter', component: IRDBlotterComponent,
    children: [
      //{path:'',component:SearchComponent},
      {
        path: 'search', component: SearchComponent,
        children: [
          { path: '', component: SwapComponent },
          { path: 'swap', component: SwapComponent },
          { path: 'swapOption', component: SwapOptionComponent },
          { path: 'fra', component: FraComponent },
          { path: 'cap-floor', component: CapFloorComponent }
        ]
      },
      {
        path: 'results', component: ResultsComponent,
        children: [
          { path: 'swapresult', component: SwapresultComponent }
        ]
      }
    ]
  },

  //tarun routes
  {
    path: 'cap', component: CapfloorComponent,
    children: [
      { path: '', redirectTo: 'payment', pathMatch: 'full' },
      { path: 'payment', component: PaymentsComponent },
      { path: 'reset', component: ResetsComponent },
      { path: 'amortization', component: AmortizationComponent },
      { path: '', component: SchedulesComponent, outlet: 'schedules' }
    ]
  },
  { path: 'savecap', component: SavingcapfloorComponent },
  {
    path: 'trade', component: TradebasicComponent,
    children: [
      { path: '', redirectTo: 'additional', pathMatch: 'full' },
      { path: 'additional', component: AdditionalFieldsComponent },
      { path: 'fees', component: FeesComponent },
      { path: 'sales', component: SalesCreditComponent },
      { path: 'margin', component: MarginComponent },
      { path: 'assign', component: AssignmentComponent },
      { path: 'partial', component: PartialAssignmentComponent },

    ]
  },

  { path: 'quickticket', component: QuickticketComponent },



  //suchi routes

  { path: 'front-page', component: FrontPageComponent },
  { path: 'save', component: SwapticketsaveComponent },
  {
    path: 'swapticket', component: SwapTicketComponent,
    children: [
      { path: '', redirectTo: 'payment', pathMatch: 'full' },  
      { path: 'payment', component: SwapPaymentComponent }, 
      { path: 'reset', component: SwapResetComponent },  
      { path: 'amortisation', component: SwapAmortisationComponent },  
      { path: '', component: ScheduleComponent, outlet: 'schedule' }  
    ]
  },
  { path: 'quicktickets', component: QuickTicketsComponent },

  {
    path: 'tradebasics', component: TradeBasicsComponent,
    children: [
      { path: '', redirectTo: 'additionalfield', pathMatch: 'full' },
      { path: 'additionalfield', component: AdditionalfieldsComponent },
      { path: 'fees', component: FeeComponent },
      { path: 'salescredit', component: SalescreditComponent },
      { path: 'margin', component: MarginsComponent },
      { path: 'assignment', component: AssignmentsComponent },
      { path: 'partialassignment', component: PartialasignmentComponent }]
  },


  //Ramya Routes
  {
    path: 'UserEntitlement', component: UserEntitlementComponent,
    children: [

      {
        path: 'list',
        component: ListEmployeeComponent,
        resolve: { employResolveService: EmploylistResolveGuardService }
      },

      {
        path: 'edit/:id',
        component: CreateEmployeeComponent,
        canDeactivate: [createEmployCanDeActivateRouterGuardSerice]
      },

      {
        path: 'employees/:id',
        component: EmployeeDetailsComponent,
        canActivate: [employDetailsCanActivateRouteService]
      },
      { path: 'Firm-Account', component: FirmAccountComponent },
      { path: 'Customer-Account', component: CustomerAccountComponent },
      { path: 'Product', component: ProductComponent },
      { path: 'Location', component: LocationComponent },
      { path: 'Menu-Options', component: MenuComponent },
      { path: 'Legal-Entity', component: LegalEntityComponent },
      { path: '', redirectTo: '/UserEntitlement/list', pathMatch: 'full' },
      { path: 'pageNotFound', component: PageNotFoundComponent },
    ]
  },




  //firdose
  { path: 'ffra', component: FrasComponent },
  {
    path: 'ftradebasic', component: FraTradeBasicComponent,
    children: [
      { path: '', component: FraAdditionalFieldsComponent },
      { path: 'fadditional', component: FraAdditionalFieldsComponent },
      { path: 'ffees', component: FraFeesComponent },
      { path: 'fsales', component: FraSalesCreditComponent },
      { path: 'fmargin', component: FraMarginComponent },
      { path: 'fassign', component: FraAssignmentComponent },
      { path: 'fpartial', component: FraPartialAssignmentComponent }
    ]
  },
  { path: 'fquickticket', component: FraQuickTicketComponent },

  //archana
  { path: 'so-quickticket', component: SwapoptionQuickticketComponent },
  {
    path: 'swapoption', component: SwapoptionComponent,
    children: [
      { path: '', redirectTo: 'so-payment', pathMatch: 'full' },
      { path: 'so-payment', component: SwapoptionPaymentsComponent },
      { path: 'so-reset', component: SwapoptionResetComponent },
      { path: 'so-amortisation', component: SwapoptionAmortisationComponent },
      { path: '', component: SwapoptionScheduleComponent, outlet: 'so-sechdule' }
    ]
  },
  {
    path: 'so-tradebasic', component: SwapoptionTradebasicComponent,
    children: [
      { path: '', redirectTo: 'so-additionalfields', pathMatch: 'full' },
      { path: 'so-additionalfields', component: SwapoptionAdditionalfieldsComponent },
      { path: 'so-fees', component: SwapoptionFeesComponent },
      { path: 'so-salescredit', component: SwapoptionSalescreditComponent },
      { path: 'so-margin', component: SwapoptionMarginComponent },
      { path: 'so-assignment', component: SwapoptionAssignmentComponent },
      { path: 'so-partialassignment', component: SwapoptionPartialassignmentComponent }
    ]
  },


];




@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [

  //jagadeesh components
  IRDBlotterComponent,

  //tarun components 
  CapfloorComponent,
  TradebasicComponent,
  AdditionalFieldsComponent,
  FeesComponent,
  SalesCreditComponent,
  MarginComponent,
  AssignmentComponent,
  PartialAssignmentComponent,
  ResetsComponent,
  AmortizationComponent,
  PaymentsComponent,
  QuickticketComponent,
  SavingcapfloorComponent,

  //suchi components 
  SwapTicketComponent,
  SwapPaymentComponent,
  SwapResetComponent,
  PartialasignmentComponent,
  AssignmentsComponent,
  MarginsComponent,
  SalescreditComponent,
  FeeComponent,
  AdditionalfieldsComponent,
  TradeBasicsComponent,
  QuickTicketsComponent,
  ScheduleComponent,
  SwapAmortisationComponent,
  FrontPageComponent,
  SwapticketsaveComponent,
  //Ramya
  UserEntitlementComponent,
  ListEmployeeComponent,
  CreateEmployeeComponent,
  FirmAccountComponent,
  CustomerAccountComponent,
  ProductComponent,
  LocationComponent,
  MenuComponent,
  LegalEntityComponent,

  //firdose
  FrasComponent,
  FraTradeBasicComponent,
  FraQuickTicketComponent,
  FraAdditionalFieldsComponent,
  FraFeesComponent,
  FraSalesCreditComponent,
  FraMarginComponent,
  FraAssignmentComponent,
  FraPartialAssignmentComponent,

  //archana
  SwapoptionAdditionalfieldsComponent,
  SwapoptionPaymentsComponent,
  SwapoptionResetComponent,
  SwapoptionAmortisationComponent,
  SwapoptionQuickticketComponent,
  SwapoptionComponent,
  SwapoptionTradebasicComponent,
  SwapoptionAdditionalfieldsComponent,
  SwapoptionFeesComponent,
  SwapoptionSalescreditComponent,
  SwapoptionMarginComponent,
  SwapoptionAssignmentComponent,
  SwapoptionPartialassignmentComponent,
  SwapoptionScheduleComponent



];