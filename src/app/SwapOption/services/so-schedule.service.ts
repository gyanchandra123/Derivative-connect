import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { URL } from '../URL/URL';

@Injectable({
    providedIn:'root'
})

export class SechduleService
{   urlRef=new URL();
    private _url:string=this.urlRef.url+'sechdule';
    constructor(private _http:HttpClient)
    {}

    getData()
    {
        const headers=new HttpHeaders({ 'Content-Type':'text/xml'}).set('Accept','text/xml');
        return this._http.get(this._url,{headers,responseType:'text'});
    }
}