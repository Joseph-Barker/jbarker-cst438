import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularResizedEventModule } from 'angular-resize-event';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { OrderFinalComponent } from './order-final/order-final.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    ProductListComponent,
    CartComponent,
    ItemDetailsComponent,
    OrderFinalComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CarouselModule,
    AngularResizedEventModule,
    HttpClientModule
  ],
  providers: [HttpService,
              ProductService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
