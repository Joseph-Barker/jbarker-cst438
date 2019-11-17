import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  $product = new EventEmitter();
  private ID: string = "";
  private Category: string = "All Categories"
  
  constructor() { }

  getProductId() {
    return this.ID;
  }
  
  setProductId(ID: string) {
    this.ID = ID;
    localStorage.setItem(
      'product',
      JSON.stringify(this.ID)
    );
  }

  getCategory() {
    return this.Category;
  }

  setCategory(Category: string) {
    this.Category = Category;
  }

}
