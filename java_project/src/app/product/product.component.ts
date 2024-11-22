// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-product',
//   standalone: true,
//   imports: [],
//   templateUrl: './product.component.html',
//   styleUrl: './product.component.css'
// })
// export class ProductComponent {

// }


// product.component.ts
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent {
  constructor(private cartService: CartService) {}

  onAddToCart(productId: number): void {
    this.cartService.getProductById(productId).subscribe((product) => {
      this.cartService.addToCart(product);
      console.log('Product added to cart:', product);
    });
  }
}

