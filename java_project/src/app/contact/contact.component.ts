import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FormsModule,FormGroup, ReactiveFormsModule,Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavComponent,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      // Here you can handle form submission, e.g., send data to an API
    }
  }
}
