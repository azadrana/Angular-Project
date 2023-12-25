import { Component, OnInit } from '@angular/core';
import { SellerService } from '../service/seller.service';
import { Route, Router } from '@angular/router';
import { login, signUp } from '../data-types';

@Component({
  selector: 'app-auth-seller',
  templateUrl: './auth-seller.component.html',
  styleUrls: ['./auth-seller.component.css']
})
export class AuthSellerComponent implements OnInit {
  authError:string ="";
  constructor(private seller: SellerService, private router: Router) { }
  showLogin = false;
  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUP(data: signUp): void {
    this.seller.userSignUp(data)
    console.warn(data);
  }

  openLogin() {
    this.showLogin = true
  }

  openSignUp() {
    this.showLogin = true
  }

  login(data: login): void {
    this.seller.userLogin(data)
    this.seller.isLoginError.subscribe((isError) =>{
      if(isError){
        this.authError ="Email or password is not correct"
      }
    })
  }
}

