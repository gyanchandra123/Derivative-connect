import { URL } from './tradeUrl';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FraTradeService{
    tradeUrlRef = new URL();
    private _url:string=this.tradeUrlRef.urlTrade+'trade';
    constructor(private _http:HttpClient){}
    getData(){
        return this._http.get(this._url);
           }
    getQuick(){
        return this._http.get(this._url);
     }
}