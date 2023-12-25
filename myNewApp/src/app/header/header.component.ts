import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  menuType:String ="default";
  sellerName:string="Azad11111";
  constructor(private router: Router){}
  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.warn("in seller area")
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            console.warn(sellerStore,"sellerStore......................");
            let sellerData = sellerStore && JSON.parse(sellerStore)
            console.warn(sellerData,"sellerData.......................");
            console.warn(sellerData.name,"name.................")
            this.sellerName = sellerData.name;
          }
        }else{
         this.menuType = 'default';
        }
      }
    })
  }
  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['/'])
  }

}
