import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ProductService } from '../product.service';
import { HttpService } from '../http.service';
import { MatTable } from '@angular/material';

export interface CartContents {
  id: string;
  name: string;
  img: string;
  price: number;
  quantity: number;
  total: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartTotal: number = 0;
  
  email: string = "johndoe@gmail.com";
  cart: Object;
  product: Object;
  cartContents: CartContents[] = [];
  
  displayedColumns: string[] = ['name', 'price', 'quant', 'total'];
  dataSource = this.cartContents;
  @ViewChild(MatTable , {static: true}) table: MatTable<any>;
  constructor(private _http: HttpService, private service: ProductService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this._http.getCartByEmail(this.email).subscribe(data => {
      this.cart = data;
    
      for (let [key, value] of Object.entries(this.cart)) {
        this._http.getProductById(key).subscribe(data => {
          this.product = data;
          let quantTotal = value * this.product['price'];
          this.cartContents.push({id: this.product['id'], 
                                  name: this.product['name'], 
                                  img: this.product['imageURL'], 
                                  price: this.product['price'], 
                                  quantity: value, 
                                  total: quantTotal 
                                });
          this.cartTotal += quantTotal;
          this.dataSource = this.cartContents;
          this.table.renderRows();
        });
      }
    });  
  }
  detailsClick(ID: string) {
    this.service.setProductId(ID);
  }
}
