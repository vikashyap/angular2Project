import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MyNewServiceService {
  constructor(private _http: Http){
   }
   login:boolean = false;
   	mainJson():Observable<any>{
      return this._http.get("app/data.json").map((res)=>res.json())}
     
}
