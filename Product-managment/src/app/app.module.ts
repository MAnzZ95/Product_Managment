import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductComponent } from './Components/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductApiService } from './Services/product-api.service';
import { CartSvcService } from './Services/cart-svc.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductApiService,
    CartSvcService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
