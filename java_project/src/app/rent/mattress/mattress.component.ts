import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../../nav/nav.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-mattress',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './mattress.component.html',
  styleUrl: './mattress.component.css'
})
export class MattressComponent {
  constructor(private router: Router) {}
  mat1(){
    this.router.navigate(['/mat1'])
  }
  mat2(){
    this.router.navigate(['/mat2'])
  }
  mat3(){
    this.router.navigate(['/mat3'])
  }
  mat4(){
    this.router.navigate(['/mat4'])
  }
}
