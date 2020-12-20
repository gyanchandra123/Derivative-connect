import { URL } from './../URL/URL';
import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
    providedIn:'root'
})
export class SwapResetService{
    urlRef=new URL() ;
    private _url:string=this.urlRef.url+'swapticketpayreset'
  
    constructor(private _http:HttpClient){}
    getData(){
        return this._http.get(this._url);
    }
    getSwap(){
    return this._http.get(this._url);
    }
}