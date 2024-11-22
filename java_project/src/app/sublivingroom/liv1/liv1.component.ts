import { Component } from '@angular/core';
import { CartService } from '../../cart/cart service';
import { Router } from '@angular/router';
import { NavComponent } from "../../nav/nav.component";

@Component({
  selector: 'app-liv1',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './liv1.component.html',
  styleUrl: './liv1.component.css'
})
export class Liv1Component {
  constructor(private cartService: CartService,private router: Router) {}

  addToCart() {
    const product = {
      name: "Robo Mid Back Office Chair",
      price: 4000,
      rentalPeriod: '12 Months'
    };
    this.cartService.addToCart(product);
  }

}
