import { URL } from './../URL/URL';
import { ChangeTenor } from './changeTenor.model';
import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { PayFieldValues } from './pay-field-values';

@Injectable({
    providedIn:'root'
})
export class SwapTicketService{
    urlRef=new URL ;
    private _url:string=this.urlRef.url+'swapticketpay';
    private _urlPost:string=this.urlRef.url+'tenor';
  //  private _urlPost1:string=this.urlRef.url+'notional';
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



//gyan's code 
/* postData(payFieldValues:PayFieldValues):Observable<any>{
    return this._http.post("http://localhost:60011/derivatives/",payFieldValues);

} */

postData(payFieldValues:PayFieldValues){
    return this._http.post("http://localhost:60011/derivatives/payFieldModel",payFieldValues); 
}
}
