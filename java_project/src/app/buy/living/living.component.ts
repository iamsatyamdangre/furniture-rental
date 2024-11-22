import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../../nav/nav.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-living',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './living.component.html',
  styleUrl: './living.component.css'
})
export class LivingComponent {
  constructor(private router: Router) {}
  living1(){
    this.router.navigate(['/livingroom1'])
  }
  living2(){
    this.router.navigate(['/livingroom2'])
  }
  living3(){
    this.router.navigate(['/livingroom3'])
  }
  living4(){
    this.router.navigate(['/livingroom4'])
  }
  living5(){
    this.router.navigate(['/livingroom5'])
  }
  living6(){
    this.router.navigate(['/livingroom6'])
  }
  living7(){
    this.router.navigate(['/livingroom7'])
  }
  living8(){
    this.router.navigate(['/livingroom8'])
  }
}
