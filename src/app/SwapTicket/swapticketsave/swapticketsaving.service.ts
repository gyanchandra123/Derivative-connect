import { URL } from './../URL/URL';
import { TradeAdditionalModel } from './../additionalfields/additionalfields.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SwapAssetModel } from '../swapasset.model';
import { BehaviorSubject } from 'rxjs';
import { SwapTicketModel } from '../swapticket/swapticket.model';
import { SwapPaymentModel } from '../swappayment/swappayment.model';
import { SwapResetModel } from '../swapreset/swapreset.model';
import { SwapAmortisationModel } from '../swapamortisation/swapamortisation.model';
import { TradeBasicsModel } from '../tradebasics/tradebasics.model';

@Injectable({
    providedIn: 'root'
})
export class SwapTicketSavingService {
    urlRef = new URL();
    private _urlPost: string = this.urlRef.url + 'asset';

    private messageSource = new BehaviorSubject('swap data');

    swapTicketModel = new SwapTicketModel();
    swapPaymentModel = new SwapPaymentModel();
    swapResetModel = new SwapResetModel();
    swapAmortModel = new SwapAmortisationModel();
    swapTradeModel = new TradeBasicsModel();
    swapAddModel = new TradeAdditionalModel();
    swapAssetModel = new SwapAssetModel();

    private swapTicketMessage = new BehaviorSubject(this.swapTicketModel);
    private paymentsMessage = new BehaviorSubject(this.swapPaymentModel);
    private resetsMessage = new BehaviorSubject(this.swapResetModel);
    private amortMessage = new BehaviorSubject(this.swapAmortModel);
    private tradeMessage = new BehaviorSubject(this.swapTradeModel);
    private addMessage = new BehaviorSubject(this.swapAddModel);



    currentMessage = this.messageSource.asObservable();
    currentMsgSwap = this.swapTicketMessage.asObservable();
    currentMsgPayments = this.paymentsMessage.asObservable();
    currentMsgResets = this.resetsMessage.asObservable();
    currentMsgAmort = this.amortMessage.asObservable();
    currentMsgTrade = this.tradeMessage.asObservable();
    currentMsgAdd = this.addMessage.asObservable();
    constructor(private _http: HttpClient) { }

    insertSwapData() {
        this.swapAssetModel.status
        this.swapAssetModel.tradestatus
        this.swapAssetModel.traderef
        this.swapAssetModel.tradetype = this.swapTradeModel.tradeType;
        this.swapAssetModel.producttype
        this.swapAssetModel.subtype = this.swapTradeModel.subType;
        this.swapAssetModel.trader = this.swapTradeModel.trader;
        this.swapAssetModel.firmaccount = this.swapTradeModel.firmAccount;
        this.swapAssetModel.customeraccount = this.swapTradeModel.customerAccount;
        this.swapAssetModel.longname = this.swapTradeModel.longName;
        this.swapAssetModel.salesperson = this.swapTradeModel.salesPerson;
        this.swapAssetModel.brokeraccount = this.swapTradeModel.brokerAccount;
        this.swapAssetModel.modificationreason = this.swapTradeModel.modReason;
        this.swapAssetModel.comments = this.swapTradeModel.comments;
        this.swapAssetModel.alternateref = this.swapAddModel.alternateRef;
        this.swapAssetModel.bookingtype = this.swapAddModel.bookingType;
        this.swapAssetModel.earlytermdate = this.swapTradeModel.earlyTermDate;
        this.swapAssetModel.earlytermreason = this.swapTradeModel.earlyTermReason;
        this.swapAssetModel.externalsystem = this.swapTradeModel.externalSystem;
        this.swapAssetModel.externalref = this.swapTradeModel.externalRef;
        this.swapAssetModel.flowstatus = this.swapAddModel.flowStatus;
        this.swapAssetModel.lastmodifiedby = this.swapAddModel.lastModifiedBy;
        this.swapAssetModel.lastverifiedby = this.swapAddModel.lastVerifiedBy;
        this.swapAssetModel.legalentity = this.swapTradeModel.legalEntity;
        this.swapAssetModel.location = this.swapTradeModel.location;
        this.swapAssetModel.matchingstatus = this.swapAddModel.matchStatus;
        this.swapAssetModel.terminationdate = this.swapTradeModel.terminationDate;
        this.swapAssetModel.modifiedtimestamp = this.swapAddModel.lastModified;
        this.swapAssetModel.operationsref = this.swapAddModel.operationRef;
        this.swapAssetModel.originaltraderef = this.swapAddModel.originTradeRef;
        this.swapAssetModel.effectivedate = this.swapTradeModel.effectiveDate;
        this.swapAssetModel.swapstatus
        this.swapAssetModel.swapoptionref
        this.swapAssetModel.tradedate = this.swapTradeModel.tradeDate;
        this.swapAssetModel.tradeversion = this.swapTradeModel.version;
        this.swapAssetModel.verifiedtimestamp = this.swapAddModel.lastVerified;


        this.swapAssetModel.tenor = this.swapTicketModel.txtPayTenor;
        this.swapAssetModel.legno = this.swapTicketModel.cmbPay;
        this.swapAssetModel.position = this.swapTicketModel.txtPay;
        this.swapAssetModel.currency = this.swapTicketModel.cmbPayCurrency;
        this.swapAssetModel.notional = this.swapTicketModel.txtPayNotional;
        this.swapAssetModel.startdate = this.swapTicketModel.txtPayStartDate;
        this.swapAssetModel.enddate = this.swapTicketModel.txtPayEndDate;
        this.swapAssetModel.frontstubdate = this.swapTicketModel.txtPayFrontstub;
        this.swapAssetModel.backstubdate = this.swapTicketModel.txtPayBackStub;
        this.swapAssetModel.frontstubmanualrate = this.swapTicketModel.txtPayFrontstub;
        this.swapAssetModel.backstubmanualrate = this.swapTicketModel.txtPayBackStub;
        this.swapAssetModel.fixedquote = this.swapTicketModel.txtPayFixedQuote;
        this.swapAssetModel.marketindex = this.swapResetModel.cmbPayMarketIndex;
        this.swapAssetModel.daycount = this.swapTicketModel.cmbPayDayCount;
        this.swapAssetModel.accuralfreq = this.swapTicketModel.cmbPayAccrualFreq;
        this.swapAssetModel.amortfreq = this.swapAmortModel.cmbPayAmortFreq;
        this.swapAssetModel.payfreq = this.swapPaymentModel.cmbPayPayFreqPnl;
        this.swapAssetModel.resetfreq = this.swapResetModel.cmbPayResetFreq;
        this.swapAssetModel.accuralbusday = this.swapTicketModel.cmbPayAccrualBusDay;
        this.swapAssetModel.accuralcalendars = this.swapTicketModel.cntPayAccrualCalendars;
        this.swapAssetModel.accuralmarching = this.swapTicketModel.cmbPayAccrualMarching;
        this.swapAssetModel.accuralrollday = this.swapTicketModel.cmbPayAccrualRollDay;
        this.swapAssetModel.accuralrollweek = this.swapTicketModel.cmbPayAccrualRollWeek;
        this.swapAssetModel.amortrollday = this.swapAmortModel.cmbPayAmortRollDay;
        this.swapAssetModel.amortrollweek = this.swapAmortModel.cmbPayAmortRollWeek;
        this.swapAssetModel.amortamount = this.swapAmortModel.txtPayAmortAmount;
        this.swapAssetModel.amortbusday = this.swapAmortModel.cmbPayAmortBusDay;
        this.swapAssetModel.amortcalendars = this.swapAmortModel.cntPayAmortCalendars;
        this.swapAssetModel.amortenddate = this.swapAmortModel.txtPayAmortEndDate;
        this.swapAssetModel.amortmarching = this.swapAmortModel.cmbPayAmortMarching;
        this.swapAssetModel.amortstartdate = this.swapAmortModel.txtPayAmortStartDate;
        this.swapAssetModel.amorttype = this.swapAmortModel.cmbPayAmortType;
        this.swapAssetModel.compfreq
        this.swapAssetModel.compoundingconv = this.swapTicketModel.cmbPayCompounding;
        this.swapAssetModel.discountcurve = this.swapTicketModel.cmbPayDiscountCurve;
        this.swapAssetModel.enddaterollflag = this.swapTicketModel.cmbPayEndDateRollFlag;
        this.swapAssetModel.endofmonthindicator = this.swapTicketModel.cmbPayEndOfMonthIndicator;
        this.swapAssetModel.gearfactor = this.swapTicketModel.txtPayGearFactor;
        this.swapAssetModel.initialquotecalendars = this.swapResetModel.cntPayInitialQuotePayCalendars;
        this.swapAssetModel.initialquotedate = this.swapResetModel.txtPayInitialIntialPayQuoteDate;
        this.swapAssetModel.initialquotelag = this.swapResetModel.txtPayIntialQuoteLag;
        this.swapAssetModel.legtype = this.swapTicketModel.cmbPay;
        this.swapAssetModel.notionalexchange = this.swapTicketModel.cmbPayNotionalExchange;
        this.swapAssetModel.paybusday = this.swapPaymentModel.cmbPayPayBusDay;
        this.swapAssetModel.paycalendars = this.swapPaymentModel.cntPayPayCalendars;
        this.swapAssetModel.paylag = this.swapPaymentModel.txtPayLag;
        this.swapAssetModel.paymarching = this.swapPaymentModel.cmbPayPayMarching;
        this.swapAssetModel.paymentconvention = this.swapPaymentModel.cmbPayPaymentConvention;
        this.swapAssetModel.paymentconversioncurrency = this.swapPaymentModel.cmbPayPaymentConversionCurrency;
        this.swapAssetModel.paymentconversionindex = this.swapPaymentModel.cmbPayPaymentConversionIndex;
        this.swapAssetModel.paymentconversionlag = this.swapPaymentModel.txtPayPaymentConversionLag;
        this.swapAssetModel.payrollday = this.swapPaymentModel.cmbPayPayRollDay;
        this.swapAssetModel.payrollweek = this.swapPaymentModel.cmbPayRollWeek;
        this.swapAssetModel.quotecalendars = this.swapResetModel.cntPayQuoteCalender;
        this.swapAssetModel.quotelag = this.swapResetModel.txtPayIntialQuoteLag;
        this.swapAssetModel.ratecutoff = this.swapResetModel.txtPayRateCutOff;
        this.swapAssetModel.resetaveraging = this.swapResetModel.cmbPayResetAveragins;
        this.swapAssetModel.resetbusday = this.swapResetModel.cmbPayResetBusDay;
        this.swapAssetModel.resetconvention = this.swapResetModel.cmbPayResetConvention;
        this.swapAssetModel.resetmarching = this.swapResetModel.cmbPayResetMarching;
        this.swapAssetModel.resetrollday = this.swapResetModel.cmbPayResetPayRollDay;
        this.swapAssetModel.resetrollweek = this.swapResetModel.cmbPayResetRollWeek;
        this.swapAssetModel.resettype = this.swapResetModel.cmbPayResetType;
        this.swapAssetModel.spread = this.swapTicketModel.txtPaySpread;
        this.swapAssetModel.startdateroll = this.swapTicketModel.cmbPayStartDateRollFlag;

        return this._http.post(this._urlPost, this.swapAssetModel);
    }

    changeMessage(message: string) {
        this.messageSource.next(message)
    }

    getPayment(swapPaymentModel: SwapPaymentModel) {
        this.swapPaymentModel = swapPaymentModel;
    }
    getReset(swapResetModel: SwapResetModel) {
        this.swapResetModel = swapResetModel;
    }
    getAmort(swapAmortisationModel: SwapAmortisationModel) {
        this.swapAmortModel = swapAmortisationModel;
    }
    getSwapTicket(swapTicketModel: SwapTicketModel) {
        this.swapTicketModel = swapTicketModel;
    }
    getTradeTicket(swapTicketTradeModel: TradeBasicsModel) {
        this.swapTradeModel = swapTicketTradeModel;
    }

    getAddFields(swapTradeAddModel: TradeAdditionalModel) {
        this.swapAddModel = swapTradeAddModel;
    }
}