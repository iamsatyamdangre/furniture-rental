import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavComponent } from "../nav/nav.component";
import { CommonModule } from '@angular/common'; // Import CommonModule
import { UserService } from '../services/user.service';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NavComponent, CommonModule,RouterLink,RouterLinkActive,RouterModule], // Add CommonModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private userService: UserService) {}

  login() {
    const loginData = this.loginForm.value;
    this.userService.login(loginData).subscribe(
      (response) => {
        alert('Login successful!');
        console.log('User:', response);
      },
      (error) => {
        alert('Login failed: ' + error.error.message);
      }
    );
  }
}