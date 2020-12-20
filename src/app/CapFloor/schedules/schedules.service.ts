import { URL } from './../URL/URL';
import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
    providedIn:'root'
})

export class SchedulesService{
    

    urlRef = new URL();
    private _url:string=this.urlRef.url +'capfloorResets';


   /* private _url:string='http://localhost:60010/derivatives/capfloorpayments'; */
constructor(private _http:HttpClient){}

getData(){
 return  this._http.get(this._url);
}

}
