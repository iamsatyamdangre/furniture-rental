
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = '("http://localhost:8080/api/cart")'; // Update with your backend URL
 

  
  constructor(private http:HttpClient) { }
  // baseUrl = environment+"/api/cart";

  addCartItem(list_item : number){
    this.http.post('${this.baseUrl}/add',list_item)
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${productId}`);
  }

  addToCart(product: Product): void {
    // Logic to add product to cart (local storage or in-memory cart array)
  }
}


