import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class TradeBasicService
{
    private _url:string='http://localhost:60020/restapi/add';
    constructor(private _http:HttpClient)
    {}

    getData()
    {
     return this._http.get(this._url);
    }

    getSwapOptionReset()
    {
        return this._http.get(this._url);
    }
}