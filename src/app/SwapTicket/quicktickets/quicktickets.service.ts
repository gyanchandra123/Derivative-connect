import { URL } from './../URL/URL';
import { ChangeTenor } from './changeTenor.model';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn:'root'
})

export class QuickTicketsService
{
    urlRef=new URL() ;
    private _url:string=this.urlRef.url+'swapticketquickticket';
    private _urlPost:string=this.urlRef.url+'tenor';
s
    constructor(private _http:HttpClient){}
    getData(){
        return this._http.get(this._url);
    }
    getSwap(){
    return this._http.get(this._url);
    }
    getTenorDate(tenorModel:ChangeTenor)
{
    return this._http.post(this._urlPost,tenorModel);
}
}