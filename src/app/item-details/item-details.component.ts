import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  
  product: Object;
  constructor(private _http: HttpService, private service: ProductService) { }

  ngOnInit() {
    if (localStorage.getItem('product') === null) {
      this._http.getProductById(this.service.getProductId()).subscribe(data => {
        this.product = data;
      });  
    } else {
      this._http.getProductById(JSON.parse(localStorage.getItem('product'))).subscribe(data => {
        this.product = data;
      });       
    }
  }

}
