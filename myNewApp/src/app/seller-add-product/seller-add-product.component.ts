import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { product } from '../data-types';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMessage:string|undefined;
  
  constructor(private product:ProductService) {}
  ngOnInit(): void{}

  addProductFunction(data:product){
    console.warn("you are calling this from seller add",data)
    this.product.addProduct(data).subscribe((result)=>{
      console.warn(result)
      if(result){
        this.addProductMessage ="Product is successfully added"
      }
      setTimeout(() =>(this.addProductMessage = undefined),3000)
    })
  }

}
