import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../../nav/nav.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {
  constructor(private router: Router) {}
  store1(){
    this.router.navigate(['/store1'])
  }
  store2(){
    this.router.navigate(['/store2'])
  }
  store3(){
    this.router.navigate(['/store3'])
  }
  store4(){
    this.router.navigate(['/store4'])
  }
  store5(){
    this.router.navigate(['/store5'])
  }
  store6(){
    this.router.navigate(['/store6'])
  }
  store7(){
    this.router.navigate(['/store7'])
  }
  store8(){
    this.router.navigate(['/store8'])
  }
}
