import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];
  isCartOpen = false;

  addToCart(item: any) {
    this.cartItems.push(item);
    this.isCartOpen = true;
  }

  toggleCart(state: boolean) {
    this.isCartOpen = state;
  }



  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }
}