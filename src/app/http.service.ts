import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('http://localhost:8081/products/getAll');
  }

  getProductById(ID: string) {
    return this.http.get('http://localhost:8081/products/get/' + ID);
  }

  getProductByCat(Category: string) {
    return this.http.get('http://localhost:8081/products/category/' + Category);
  }


  getCartByEmail(Email: string) {
    return this.http.get('http://localhost:8081/user/cart/{email}?email=' + Email);
  }

}
