import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fireUpHeroku: Object;

  constructor(private service: ProductService, private _http: HttpService) { }
  
  customOptions: any = {
    loop: true,
    autoplay:true,
    autoplayTimeout: 5000,
    autoplaySpeed: 700,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: [ '', '' ],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1 //2
      },
      740: {
        items: 1 //3
      },
      940: {
        items: 1 //4
      }
    },
    nav: false
  }
  
  ngOnInit() {
    window.scrollTo(0, 0)
    this._http.getProducts().subscribe(data => {
      this.fireUpHeroku = data;
    });  
  }

  catClick(Category: string) {
    this.service.setCategory(Category);
  }
}
