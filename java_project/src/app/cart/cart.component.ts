// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [],
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.css'
// })
// export class CartComponent {

// }




import { Component, OnInit } from '@angular/core';
// import { CartService } from '../services/cart.service';
import { CartService } from './cart service';
import { furn } from '../services/furniture';
import { FetchFurnitureService } from '../services/fetch-furniture.service';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [NavComponent,NgFor]
})
export class CartComponent  {
  constructor(private router: Router, private serv: FetchFurnitureService) {}


  elements: furn[] = [];

  ngOnInit(): void {
    this.serv.getAllFurniture().subscribe({
      next: (data) => {
        this.elements = data;
      },
      error: (error) => {
        console.error('Error fetching furniture:', error);
      },
    });
    console.log(this.elements);
  }




  proceed() {
    this.router.navigate(['/proceed']);
  }
}
