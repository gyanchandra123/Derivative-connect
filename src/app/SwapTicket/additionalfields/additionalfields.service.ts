import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { URL } from '../tradebasics/UrlTrade';
@Injectable({
    providedIn:'root'
})
export class SwapAdditionlService{

    urlRef=new URL;
    private _url:string=this.urlRef.url+'trade';

    constructor(private _http:HttpClient){}
    getData(){
        return this._http.get(this._url);
    }
    getSwap(){
    return this._http.get(this._url);
    }
}