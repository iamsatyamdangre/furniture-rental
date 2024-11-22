import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from "../nav/nav.component";
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NavComponent, CommonModule,RouterLink,RouterLinkActive], // Add CommonModule here
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private userService: UserService,  private router: Router) {}

  signup() {
    const formData = this.signupForm.value;
    if (formData.password !== formData.confirmpassword) {
      alert('Passwords do not match!');
      return;
    }
    const user = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    };

    this.userService.signup(user).subscribe(
      (response) => {
        // Adjust response handling based on what the backend sends
        if (typeof response === 'string') {
          alert(response); // For plain text responses
        } else if (response.message) {
          alert(response.message); // For JSON responses with a 'message' field
        }
        this.signupForm.reset();
        this.router.navigate(['/login']);
      },
      //(error) => {
      (error) => {
        const errorMessage = error.error?.message || 'An error occurred during signup.';
       // alert(Signup failed: ${errorMessage});
       alert(`Signup failed: ${errorMessage}`);
      }
    );    
  }

  reset() {
    this.signupForm.reset();
  }
}