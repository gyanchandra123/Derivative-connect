import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { URL } from './UrlTrade';
@Injectable({
    providedIn:'root'
})
export class SwapTradeService{
    urlRef=new URL
    private _url:string=this.urlRef.url+'trade';
    

    constructor(private _http:HttpClient){}
    getData(){
        return this._http.get(this._url);
    }
    getSwap(){
    return this._http.get(this._url);
    }
}