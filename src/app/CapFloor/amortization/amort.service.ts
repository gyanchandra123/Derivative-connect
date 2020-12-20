import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { URL } from '../URL/URL';
@Injectable({
    providedIn:'root'
})

export class AmortService{


    urlRef = new URL();
   
  
    private _url:string=this.urlRef.url +'capfloorAmorts';

   constructor(private _http:HttpClient){}
getData(){
  
    return this._http.get(this._url);
 
}
}
