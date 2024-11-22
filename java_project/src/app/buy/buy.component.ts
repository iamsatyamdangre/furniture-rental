import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
living() {
throw new Error('Method not implemented.');
}
  constructor(private router: Router) {}
  bedroom(){
    this.router.navigate(['/room'])
  }
  livingroom(){
    this.router.navigate(['/living'])
  }
  storage(){
    this.router.navigate(['/store'])
  }
  study(){
    this.router.navigate(['/studyy'])
  }
  dining(){
    this.router.navigate(['/diniing'])
  }
  table(){
  this.router.navigate(['/tab'])
  }
  chair(){
    this.router.navigate(['/chairs'])
    }
}
