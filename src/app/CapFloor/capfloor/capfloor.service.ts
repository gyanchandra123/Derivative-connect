import { URL } from './../URL/URL';
import {Injectable } from '@angular/core' ;
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
    providedIn:'root'
})

export class CapFloorService{
    urlRef = new URL();
   private _url:string=this.urlRef.url +'capfloor';
   
constructor(private _http:HttpClient){}

getData(){
 return  this._http.get(this._url);
}
getCapFloorModel(){
    return this._http.get(this._url);
}

}
