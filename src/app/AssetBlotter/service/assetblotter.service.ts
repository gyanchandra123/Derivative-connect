    
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AssetblotterService {
  _url:string = 'http://192.168.43.125:6006/irdblotter/assettblotter/';
  resultUrl = 'http://192.168.43.125:6006/irdblotter/results/';
  constructor(private _http: HttpClient) {}
  getData() {
    
    return this._http.get(this._url);
  }
  getSearch() {
    const url = "search";
    return this._http.get(this._url+url);
  }

  getSwapPay() {
    const url = "swapPay";
    return this._http.get(this._url+url);
  }

  getSwapRec() {
    const url = "swapRec";
    return this._http.get(this._url+url);
  }
  getCapFloor() {
    const url = "capFloor";
    return this._http.get(this._url+url);
  }
  getFra() {
    const url = "fra";
    return this._http.get(this._url+url);
  }
  getSwapOptionRec() {
    const url = "swapOptionRec";
    return this._http.get(this._url+url);
  }

  getSwapOptionPay() {
    const url = "swapOptionPay";
    return this._http.get(this._url+url);
  }

  getSwapOption() {
    const url = "swapOption";
    return this._http.get(this._url+url);
  }
  getSwapResult()
  {
    const url = 'swapResult';
    return this._http.get(this.resultUrl+url);
  }
}
