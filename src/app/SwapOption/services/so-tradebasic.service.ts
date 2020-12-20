import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { URL } from '../URL/URL';


@Injectable({
    providedIn:'root'
})

export class TradeBasicService
{
    urlRef=new URL();
    private _url:string=this.urlRef.url+'trade';
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