import { Component, OnInit } from '@angular/core';
import { CartSvcService } from 'src/app/Services/cart-svc.service';
import { ProductApiService } from 'src/app/Services/product-api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(
    private api : ProductApiService ,private cartService : CartSvcService
    ) { }

  ngOnInit(): void {

    this.api.getProducts().subscribe(res=>{
      this.productList = res;
    })

    this.api.getProducts()
    .subscribe(res=>{
      this.productList = res;
      //this.filterCategory = res;
      this.productList.data.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price.amount});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
