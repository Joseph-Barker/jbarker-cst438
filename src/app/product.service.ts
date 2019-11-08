import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  $product = new EventEmitter();
  ID: string = "";
  Category: string = "All Categories" //All Categories
  constructor() { }

  getProductId() {
    return this.ID;
  }
  
  setProductId(ID: string) {
    this.ID = ID;
  }

  getCategory() {
    return this.Category;
  }

  setCategory(Category: string) {
    this.Category = Category;
  }
}
