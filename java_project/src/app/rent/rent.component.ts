import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './rent.component.html',
  styleUrl: './rent.component.css'
})
export class RentComponent {
  constructor(private router: Router) {}
  bedroom(){
    this.router.navigate(['/bedroom'])
  }
  livingroom(){
    this.router.navigate(['/livingroom'])
  }
  storage(){
    this.router.navigate(['/storage'])
  }
  study(){
    this.router.navigate(['/study'])
  }
  dining(){
    this.router.navigate(['/dining'])
  }
  mattress(){
    this.router.navigate(['/mattress'])
  }
}
