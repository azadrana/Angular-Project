import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../data-types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(data:product){
    console.warn("you are calling product service",data)
   return this.http.post('http://localhost:3000/products',data);
  }
  productList(){
  return  this.http.get<product[]>('http://localhost:3000/products');
  }
}
