import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../../nav/nav.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-livingroom',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './livingroom.component.html',
  styleUrl: './livingroom.component.css'
})
export class LivingroomComponent {
  constructor(private router: Router) {}
  liv1(){
    this.router.navigate(['/liv1'])
  }
  liv2(){
    this.router.navigate(['/liv2'])
  }
  liv3(){
    this.router.navigate(['/liv3'])
  }
  liv4(){
    this.router.navigate(['/liv4'])
  }
  liv5(){
    this.router.navigate(['/liv5'])
  }
  liv6(){
    this.router.navigate(['/liv6'])
  }
  liv7(){
    this.router.navigate(['/liv7'])
  }
  liv8(){
    this.router.navigate(['/liv8'])
  }
}
