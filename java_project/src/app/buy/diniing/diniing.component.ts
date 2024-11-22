import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../../nav/nav.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-diniing',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './diniing.component.html',
  styleUrl: './diniing.component.css'
})
export class DiniingComponent {
  constructor(private router: Router) {}
  din1(){
    this.router.navigate(['/din1'])
  }
  din2(){
    this.router.navigate(['/din2'])
  }
  din3(){
    this.router.navigate(['/din3'])
  }
  din4(){
    this.router.navigate(['/din4'])
  }
  din5(){
    this.router.navigate(['/din5'])
  }
  din6(){
    this.router.navigate(['/din6'])
  }
  din7(){
    this.router.navigate(['/din7'])
  }
  din8(){
    this.router.navigate(['/din8'])
  }
}
