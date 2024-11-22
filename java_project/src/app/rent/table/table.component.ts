import { Component } from '@angular/core';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

}
