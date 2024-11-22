// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { NavComponent } from "../../nav/nav.component";
// import { FooterComponent } from "../../footer/footer.component";
// import { FetchFurnitureService } from '../../services/fetch-furniture.service';

// @Component({
//   selector: 'app-bedroom',
//   standalone: true,
//   imports: [NavComponent, FooterComponent],
//   templateUrl: './bedroom.component.html',
//   styleUrl: './bedroom.component.css'
// })
// export class BedroomComponent {

//   constructor(private router: Router, private serv : FetchFurnitureService) {}
//   bed1(){
//     this.router.navigate(['/bed1'])
//   }
//   bed2(){
//     this.router.navigate(['/bed2'])
//   }
//   bed3(){
//     this.router.navigate(['/bed3'])
//   }
//   bed4(){
//     this.router.navigate(['/bed4'])
//   }
//   bed5(){
//     this.router.navigate(['/bed5'])
//   }
//   bed6(){
//     this.router.navigate(['/bed6'])
//   }
//   bed7(){
//     this.router.navigate(['/bed7'])
//   }
//   bed8(){
//     this.router.navigate(['/bed8'])
//   }


//   ngOninit(){
//     const all_good = this.serv.getAllFurniture();
//   }

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavComponent } from '../../nav/nav.component';
import { FooterComponent } from '../../footer/footer.component';
import { FetchFurnitureService } from '../../services/fetch-furniture.service';
import { furn } from '../../services/furniture';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bedroom',
  standalone: true,
  imports: [NavComponent, FooterComponent, CommonModule],
  templateUrl: './bedroom.component.html',
  styleUrl: './bedroom.component.css',
})
export class BedroomComponent {
  constructor(private router: Router, private serv: FetchFurnitureService) {}
  bed1() {
    this.router.navigate(['/bed1']);
  }
  bed2() {
    this.router.navigate(['/bed2']);
  }
  bed3() {
    this.router.navigate(['/bed3']);
  }
  bed4() {
    this.router.navigate(['/bed4']);
  }
  bed5() {
    this.router.navigate(['/bed5']);
  }
  bed6() {
    this.router.navigate(['/bed6']);
  }
  bed7() {
    this.router.navigate(['/bed7']);
  }
  bed8() {
    this.router.navigate(['/bed8']);
  }

  elements: furn[] = [];

  ngOnInit(): void {
    this.serv.getAllFurniture().subscribe({
      next: (data) => {
        this.elements = data;
      },
      error: (error) => {
        console.error('Error fetching furniture:', error);
      },
    });
    console.log(this.elements);
  }
}