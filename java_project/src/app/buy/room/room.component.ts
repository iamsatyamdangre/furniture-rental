import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from "../../nav/nav.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  constructor(private router: Router) {}
  room1(){
    this.router.navigate(['/room1'])
  }
  room2(){
    this.router.navigate(['/room2'])
  }
  room3(){
    this.router.navigate(['/room3'])
  }
  room4(){
    this.router.navigate(['/room4'])
  }
  room5(){
    this.router.navigate(['/room5'])
  }
  room6(){
    this.router.navigate(['/room6'])
  }
  room7(){
    this.router.navigate(['/room7'])
  }
  room8(){
    this.router.navigate(['/room8'])
  }
}
