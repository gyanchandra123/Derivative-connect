import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})

export class ScheduleService
{
    private _url:string='http://192.168.43.246:60010/restapi/swapticketschedule';
    constructor(private _http:HttpClient){}
    getData(){
        return this._http.get(this._url);
    }
    getSwap(){
    return this._http.get(this._url);
    }
}