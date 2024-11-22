import { Component, EventEmitter, Output } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}
  rent(){
    this.router.navigate(['/rent'])
  }
  buy(){
    this.router.navigate(['/buy'])
  }

  liv2(){
    this.router.navigate(['/liv2'])
  }

study1(){
  this.router.navigate(['/study1'])
}

  

}
