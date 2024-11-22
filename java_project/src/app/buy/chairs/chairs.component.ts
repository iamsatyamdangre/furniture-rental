import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../../nav/nav.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-chairs',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './chairs.component.html',
  styleUrl: './chairs.component.css'
})
export class ChairsComponent {
  constructor(private router: Router) {}
  chairs1(){
    this.router.navigate(['/chairs1'])
  }
  chairs2(){
    this.router.navigate(['/chairs2'])
  }
  chairs3(){
    this.router.navigate(['/chairs3'])
  }
  chairs4(){
    this.router.navigate(['/chairs4'])
  }
  chairs5(){
    this.router.navigate(['/chairs5'])
  }
 
}
