import { Component } from '@angular/core';
import { NavComponent } from "../../nav/nav.component";
import { CartlistingService } from '../../services/cartlisting.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-room1',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './room1.component.html',
  styleUrl: './room1.component.css'
})
export class Room1Component {
    cartService: any;
addtoCart: any;
product: any;
  
    constructor( cartService: CartService) {}
  
    onAddToCart(productId: number): void {
      this.cartService.getProductById(productId).subscribe((product: any) => {
        this.cartService.addToCart(product);
        console.log('Product added to cart:', product);
      });
    }
  }
  