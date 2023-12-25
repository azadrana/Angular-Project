import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { login, signUp } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false)
  constructor(private http:HttpClient,private router:Router) { }
  userSignUp(data:signUp){
    this.http
    .post('http://localhost:3000/posts',data,{observe:'response'})
    .subscribe((result) =>{
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.router.navigate(['seller-home']);
    });
  }
  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }
  userLogin(data:login){
    console.warn(data);
    this.http.get('http://localhost:3000/posts/?email=abc@gmail.com&password=abc123',{observe:'response'})
    .subscribe((result:any)=>{
      console.warn(result);
      if(result && result.body && result.body.length){
        console.warn("user is logged in")
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.router.navigate(['seller-home'])
      }else{
        console.warn("Log in failed")
        this.isLoginError.emit(true)
      }
    })
  }
}
