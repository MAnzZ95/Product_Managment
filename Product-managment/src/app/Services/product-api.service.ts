import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  readonly APIUrl ="https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json";
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>(this.APIUrl).pipe(map((res:any)=>{
      return res;
    }))
  }
}
