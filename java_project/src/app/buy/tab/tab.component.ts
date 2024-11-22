import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../../nav/nav.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {
  constructor(private router: Router) {}
  table1(){
    this.router.navigate(['/table1'])
  }
  table2(){
    this.router.navigate(['/table2'])
  }
  table3(){
    this.router.navigate(['/table3'])
  }
  table4(){
    this.router.navigate(['/table4'])
  }
  table5(){
    this.router.navigate(['/table5'])
  }
}
