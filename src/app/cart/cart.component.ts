import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private service: ProductService) { }

  ngOnInit() {
  }
  detailsClick(ID: string) {
    this.service.setProductId(ID);
  }
}
