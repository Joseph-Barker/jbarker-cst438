import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Object;
  selected = 'All Categories';
  categories: string[] = [
    'All Categories',
    'Appliances',
    'Bath & Faucets',
    'Blinds & Window Treatments',
    'Building Materials',
    'Decor & Furniture',
    'Doors & Windows',
    'Electrical',
    'Flooring & Area Rugs',
    'Hardware',
    'Heating & Cooling',
    'Kitchen',
    'Lawn & Garden',
    'Lighting & Ceiling Fans',
    'Outdoor Living',
    'Paint',
    'Plumbing',
    'Storage & Organization',
    'Tools'
  ];
  constructor(private _http: HttpService, private service: ProductService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.selected = this.service.getCategory();
    
    if (this.service.getCategory() === "All Categories") {
      this._http.getProducts().subscribe(data => {
        this.products = data;
      });
    } else {
      this._http.getProductByCat(this.selected).subscribe(data => {
        this.products = data;
      });      
    }     
  }

  detailsClick(ID: string) {
    this.service.setProductId(ID);
  }

  catClick(Category: string) {
    this.service.setCategory(Category);
    this.ngOnInit();
  }
}
