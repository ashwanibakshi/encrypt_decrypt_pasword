import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 

  }
  onencrypt(data:any){
    
    let x = {
      "pass" : data
    }
    console.log(x)
     const header = new HttpHeaders()
     .set('content-type', 'application/json')
     .set('Access-Control-Allow-Origin', '*');
     return this.http.post('http://localhost:3000/decrypt',x,{'headers':header})
  }
}
