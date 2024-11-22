import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../../nav/nav.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-study',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './study.component.html',
  styleUrl: './study.component.css'
})
export class StudyComponent {
  constructor(private router: Router) {}
  study1(){
    this.router.navigate(['/study1'])
  }
  study2(){
    this.router.navigate(['/study2'])
  }
  study3(){
    this.router.navigate(['/study3'])
  }
  study4(){
    this.router.navigate(['/study4'])
  }
  study5(){
    this.router.navigate(['/study5'])
  }
  study6(){
    this.router.navigate(['/study6'])
  }
  study7(){
    this.router.navigate(['/study7'])
  }
  study8(){
    this.router.navigate(['/study8'])
  }
}