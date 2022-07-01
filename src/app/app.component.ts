import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js'
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  constructor(private dservice:DataService){
    this.encrypt();
  }
  
  encrypt(){
    var  pass = 'Pass123'
    var ciphertext = CryptoJS.AES.encrypt(pass, 'secret key 123').toString();
         console.log('ENCRYPTED PASSWORD',ciphertext)
      this.dservice.onencrypt(ciphertext).subscribe(data=>{
        console.log(data);
      })   
  }
}
