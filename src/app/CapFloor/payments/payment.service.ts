import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { URL } from '../URL/URL';
@Injectable({
    providedIn:'root'
})
export class PaymentService{
    urlRef = new URL();
   
  
    private _url:string=this.urlRef.url +'capfloorpayments';

  
constructor(private _http:HttpClient){}

getData(){
 return this._http.get(this._url);
 
}
}
