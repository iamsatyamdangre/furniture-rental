import { Component } from '@angular/core';
import { NavComponent } from "../../nav/nav.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-chair',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './chair.component.html',
  styleUrl: './chair.component.css'
})
export class ChairComponent {

}
