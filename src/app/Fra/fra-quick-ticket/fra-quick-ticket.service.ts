import { URL } from './../URL/URL';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FraQuickTicketService{
    urlRef = new URL();
    private _url:string=this.urlRef.url+'quick';
    constructor(private _http:HttpClient){}
    getData(){
        return this._http.get(this._url);
           }
    getQuick(){
        return this._http.get(this._url);
     }
}