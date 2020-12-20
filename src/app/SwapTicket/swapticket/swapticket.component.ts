import { ChangeNotional } from './changeNotional.model';
import { ChangeTenor } from './changeTenor.model';
import { SwapTicketModel } from './swapticket.model';
import { SwapTicketService } from './swapticket.service';
import { Component, OnInit } from '@angular/core';
import { SwapTicketSavingService } from '../swapticketsave/swapticketsaving.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-swapticket',
  templateUrl: './swapticket.component.html',
  styleUrls: ['./swapticket.component.css']
})
export class SwapTicketComponent implements OnInit {
  /*   onValueChange(value: Date): void {
  console.log(value);
    } */
  xml;
  obj;
  now: number;
  model = new SwapTicketModel();
  tenorModel = new ChangeTenor();
  //notionalModel=new ChangeNotional();
  model2 = new SwapTicketModel();

  constructor(private swapticketService: SwapTicketService,
    private swapTicketSavingService: SwapTicketSavingService, public fb: FormBuilder) {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }
  completeForm = new FormGroup({
    legno: new FormControl(''),
    legtype: new FormControl(''),
    currency: new FormControl(''),
    tenor: new FormControl(''),
    notional: new FormControl(''),
    ne: new FormControl(''),
    startdate: new FormControl(''),
    startstub: new FormControl(''),
    sdrf: new FormControl(''),
    edrf: new FormControl(''),
    enddate: new FormControl(''),
    endstub: new FormControl(''),
    frontstub: new FormControl(''),
    backstub: new FormControl(''),
    fixedquote: new FormControl(''),
    gearfactor: new FormControl(''),
    spread: new FormControl(''),
    dc: new FormControl(''),
    dcurve: new FormControl(''),
    busday: new FormControl(''),
    cal: new FormControl(''),
    freq: new FormControl(''),
    march: new FormControl(''),
    rd: new FormControl(''),
    rw: new FormControl(''),
    eom: new FormControl(''),
    comp: new FormControl(''),

  });

  onSubmit() {
    console.warn(this.completeForm.value);
    //this.model2.cmbPay=this.completeForm.value.currency;
    this.model2.txtPay = this.completeForm.value.legno;
    this.model2.cmbPay = this.completeForm.value.legtype;
    this.model2.cmbPayCurrency = this.completeForm.value.currency;
    this.model2.txtPayTenor = this.completeForm.value.tenor;
    this.model2.txtPayNotional = this.completeForm.value.notional;
    this.model2.cmbPayNotionalExchange = this.completeForm.value.ne;
    this.model2.txtPayStartDate = this.completeForm.value.startdate;
    this.model2.txtPayStartStub = this.completeForm.value.startstub;
    this.model2.cmbPayStartDateRollFlag = this.completeForm.value.sdrf;
    this.model2.cmbPayEndDateRollFlag = this.completeForm.value.edrf;
    this.model2.txtPayEndDate = this.completeForm.value.enddate;
    this.model2.txtPayEndStub = this.completeForm.value.endstub;
    this.model2.txtPayFrontstub = this.completeForm.value.frontstub;
    this.model2.txtPayBackStub = this.completeForm.value.backstub;
    this.model2.txtPayFixedQuote = this.completeForm.value.fixedquote;
    this.model2.txtPayGearFactor = this.completeForm.value.gearfactor;
    this.model2.txtPaySpread = this.completeForm.value.spread;
    this.model2.cmbPayDayCount = this.completeForm.value.dc;
    this.model2.cmbPayDiscountCurve = this.completeForm.value.dcurve;
    this.model2.cmbPayAccrualBusDay = this.completeForm.value.busday;
    this.model2.cntPayAccrualCalendars = this.completeForm.value.cal;
    this.model2.cmbPayAccrualFreq = this.completeForm.value.freq;
    this.model2.cmbPayAccrualMarching = this.completeForm.value.march;
    this.model2.cmbPayAccrualRollDay = this.completeForm.value.rd;
    this.model2.cmbPayAccrualRollWeek = this.completeForm.value.rw;
    this.model2.cmbPayEndOfMonthIndicator = this.completeForm.value.eom;
    this.model2.cmbPayCompounding = this.completeForm.value.comp;

  }
  ngOnInit() {
    this.swapticketService.getData().subscribe(res => {
      this.obj = res;
      this.model.cmbPay = this.obj[0].swapLeg;
      this.model.cmbPayCurrency = this.obj[1].currency;
      this.model.txtPay = this.obj[15].txtPay;
      this.model.txtPayTenor = this.obj[15].tenor;
      this.model.txtPayNotional = this.obj[15].notional;
      this.model.cmbPayNotionalExchange = this.obj[2].notionalExchange;
      this.model.txtPayStartDate = this.obj[15].startDate;
      this.model.txtPayStartStub = this.obj[15].frontStubDate;
      this.model.cmbPayStartDateRollFlag = this.obj[3].startRoll;
      this.model.cmbPayEndDateRollFlag = this.obj[4].endRoll;
      this.model.txtPayEndDate = this.obj[15].endDate;
      this.model.txtPayEndStub = this.obj[15].backStubDate;
      this.model.txtPayFrontstub = this.obj[15].frontStubManualRate;
      this.model.txtPayBackStub = this.obj[15].backStubManualRate;
      this.model.txtPayFixedQuote = this.obj[15].fixedQuote;
      this.model.txtPayGearFactor = this.obj[15].gearFactor;
      this.model.txtPaySpread = this.obj[15].spread;
      this.model.cmbPayDayCount = this.obj[5].dayCount;
      this.model.cmbPayDiscountCurve = this.obj[6].discountCurve;
      this.model.cmbPayAccrualBusDay = this.obj[7].busDay;
      this.model.cntPayAccrualCalendars = this.obj[8].calendars;
      this.model.cmbPayAccrualFreq = this.obj[9].frequency;
      this.model.cmbPayAccrualMarching = this.obj[10].marching;
      this.model.cmbPayAccrualRollDay = this.obj[11].rollDay;
      this.model.cmbPayAccrualRollWeek = this.obj[12].weekDay;
      this.model.cmbPayEndOfMonthIndicator = this.obj[13].eom;
      this.model.cmbPayCompounding = this.obj[14].compounding;
      this.model.txtModStatus = "loaded";



      this.model.cmbRec = this.obj[0].swapLeg;
      this.model.cmbRecCurrency = this.obj[1].currency;
      this.model.txtRec = this.obj[15].txtPay;
      this.model.txtRecTenor = this.obj[15].tenor;
      this.model.txtRecNotional = this.obj[15].notional;
      this.model.cmbRecNotionalExchange = this.obj[2].notionalExchange;
      this.model.txtRecStartDate = this.obj[15].startDate;
      this.model.txtRecStartStub = this.obj[15].frontStubDate;
      this.model.cmbRecStartDateRollFlag = this.obj[3].startRoll;
      this.model.cmbRecEndDateRollFlag = this.obj[4].endRoll;
      this.model.txtRecEndDate = this.obj[15].endDate;
      this.model.txtRecEndStub = this.obj[15].backStubDate;
      this.model.txtRecFrontStub = this.obj[15].frontStubManualRate;
      this.model.legsPnl = this.obj[15].backStubManualRate;
      this.model.txtRecFixedQuote = this.obj[15].fixedQuote;
      this.model.txtRecGearFactor = this.obj[15].gearFactor;
      this.model.txtRecSpread = this.obj[15].spread;
      this.model.cmbRecDayCount = this.obj[5].dayCount;
      this.model.cmbRecDiscountCurve = this.obj[6].discountCurve;
      this.model.cmbRecAccrualBusDay = this.obj[7].busDay;
      this.model.cntRecAccrualCalendars = this.obj[8].calendars;
      this.model.cmbRecAccrualFreq = this.obj[9].frequency;
      this.model.cmbRecAccrualMarching = this.obj[10].marching;
      this.model.cmbRecAccrualRollDay = this.obj[11].rollDay;
      this.model.cmbRecAccrualRollWeek = this.obj[12].weekDay;
      this.model.cmbRecEndOfMonthIndicator = this.obj[13].eom;
      this.model.cmbRecCompounding = this.obj[14].compounding;



      // this.swapTicketSavingService.getSwapTicket(this.model);


      this.completeForm = new FormGroup({
        legno: new FormControl(this.model.txtPay),
        legtype: new FormControl(this.model.cmbPay[0]),
        currency: new FormControl(this.model.cmbPayCurrency[0]),
        tenor: new FormControl(this.model.txtPayTenor),
        notional: new FormControl(this.model.txtPayNotional),
        ne: new FormControl(this.model.cmbPayNotionalExchange[0]),
        startdate: new FormControl(this.model.txtPayStartDate),
        startstub: new FormControl(this.model.txtRecStartStub),
        sdrf: new FormControl(this.model.cmbPayStartDateRollFlag[0]),
        edrf: new FormControl(this.model.cmbPayEndDateRollFlag[0]),
        enddate: new FormControl(this.model.txtPayEndDate),
        endstub: new FormControl(this.model.txtPayEndStub),
        frontstub: new FormControl(this.model.txtPayFrontstub),
        backstub: new FormControl(this.model.txtPayBackStub),
        fixedquote: new FormControl(this.model.txtPayFixedQuote),
        gearfactor: new FormControl(this.model.txtPayGearFactor),
        spread: new FormControl(this.model.txtPaySpread),
        dc: new FormControl(this.model.cmbPayDayCount[0]),
        dcurve: new FormControl(this.model.cmbPayDiscountCurve[0]),
        busday: new FormControl(this.model.cmbPayAccrualBusDay[0]),
        cal: new FormControl(this.model.cntPayAccrualCalendars[0]),
        freq: new FormControl(this.model.cmbPayAccrualFreq[0]),
        march: new FormControl(this.model.cmbPayAccrualMarching[0]),
        rd: new FormControl(this.model.cmbPayAccrualRollDay[0]),
        rw: new FormControl(this.model.cmbPayAccrualRollWeek[0]),
        eom: new FormControl(this.model.cmbPayEndOfMonthIndicator[0]),
        comp: new FormControl(this.model.cmbPayCompounding[0]),

      });
      this.model2.txtPay = this.completeForm.value.legno;
      this.model2.cmbPay = this.completeForm.value.legtype;
      this.model2.cmbPayCurrency = this.completeForm.value.currency;
      this.model2.txtPayTenor = this.completeForm.value.tenor;
      this.model2.txtPayNotional = this.completeForm.value.notional;
      this.model2.cmbPayNotionalExchange = this.completeForm.value.ne;
      this.model2.txtPayStartDate = this.completeForm.value.startdate;
      this.model2.txtPayStartStub = this.completeForm.value.startstub;
      this.model2.cmbPayStartDateRollFlag = this.completeForm.value.sdrf;
      this.model2.cmbPayEndDateRollFlag = this.completeForm.value.edrf;
      this.model2.txtPayEndDate = this.completeForm.value.enddate;
      this.model2.txtPayEndStub = this.completeForm.value.endstub;
      this.model2.txtPayFrontstub = this.completeForm.value.frontstub;
      this.model2.txtPayBackStub = this.completeForm.value.backstub;
      this.model2.txtPayFixedQuote = this.completeForm.value.fixedquote;
      this.model2.txtPayGearFactor = this.completeForm.value.gearfactor;
      this.model2.txtPaySpread = this.completeForm.value.spread;
      this.model2.cmbPayDayCount = this.completeForm.value.dc;
      this.model2.cmbPayDiscountCurve = this.completeForm.value.dcurve;
      this.model2.cmbPayAccrualBusDay = this.completeForm.value.busday;
      this.model2.cntPayAccrualCalendars = this.completeForm.value.cal;
      this.model2.cmbPayAccrualFreq = this.completeForm.value.freq;
      this.model2.cmbPayAccrualMarching = this.completeForm.value.march;
      this.model2.cmbPayAccrualRollDay = this.completeForm.value.rd;
      this.model2.cmbPayAccrualRollWeek = this.completeForm.value.rw;
      this.model2.cmbPayEndOfMonthIndicator = this.completeForm.value.eom;
      this.model2.cmbPayCompounding = this.completeForm.value.comp;
      this.swapTicketSavingService.getSwapTicket(this.model2);

    });

  }

  private handleEvent(): void {


    this.tenorModel.tenor = this.model.txtPayTenor;
    this.tenorModel.startDate = this.model.txtPayStartDate;
    this.swapticketService.getTenorDate(this.tenorModel).subscribe(
      res => {
        this.obj = res;

        this.model.txtPayEndDate = this.obj.date;
        this.model.txtPayEndStub = this.obj.date;
        this.model.txtRecEndDate = this.obj.date;
        this.model.txtRecEndStub = this.obj.date;
        this.model.txtRecTenor = this.model.txtPayTenor;
        this.model.txtModStatus = "modified";

      }

    );



  }


}
