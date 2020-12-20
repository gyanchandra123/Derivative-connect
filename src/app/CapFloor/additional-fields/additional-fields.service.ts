import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { URL } from '../URL/URL';

@Injectable({
    providedIn:'root'
})
export class AdditionalFieldsService{

    urlRef=new URL();

    private _url:string=this.urlRef.url+'additional';
    
constructor(private _http:HttpClient){}

getData(){
    console.log(this._url)
    return this._http.get(this._url);
 
   }

}