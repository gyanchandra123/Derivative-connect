import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { TradeURL } from '../URL/TradeUrl';

@Injectable({
    providedIn:'root'
})
export class TradeBasicServices{

    tradeUrlRef=new TradeURL();

    private _url:string=this.tradeUrlRef.tradeUrl+'trade';
    
constructor(private _http:HttpClient){}
getData(){
    return this._http.get(this._url);
 
}
}