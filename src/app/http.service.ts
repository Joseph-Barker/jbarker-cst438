import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://jbarker-438-product-service.herokuapp.com/products/getAll');
  }

  getProductById(ID: string) {
    return this.http.get('https://jbarker-438-product-service.herokuapp.com/products/get/' + ID);
  }

  getProductByCat(Category: string) {
    return this.http.get('https://jbarker-438-product-service.herokuapp.com/products/category/' + Category);
  }


  getCartByEmail(Email: string) {
    return this.http.get('https://jbarker-438-product-service.herokuapp.com/user/cart/{email}?email=' + Email);
  }

}
