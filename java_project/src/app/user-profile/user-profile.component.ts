import { Component } from '@angular/core';
import { FormControl,Validator,ReactiveFormsModule, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  fullName = new FormControl('',[Validators.required])
  Email = new FormControl('',[Validators.email,Validators.required])
  phoneNumber = new FormControl('',[Validators.required,Validators.minLength(10)])
  Address = new FormControl('',[Validators.required])
  MembershipPlan = new FormControl('',[Validators.required])


  profileForm = new FormGroup([this. fullName,this.Email,this.phoneNumber,this. Address,this. MembershipPlan]);

}



// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-user-profile',
//   templateUrl: './user-profile.component.html',
//   styleUrls: ['./user-profile.component.css']
// })
// export class UserProfileComponent implements OnInit {
//   profileForm: FormGroup;  // Declare profileForm of type FormGroup

//   constructor() {}

//   ngOnInit(): void {
//     // Initialize FormGroup directly without FormBuilder
//     this.profileForm = new FormGroup({
//       fullName: new FormControl('', Validators.required),
//       email: new FormControl('', [Validators.required, Validators.email]),
//       phoneNumber: new FormControl('', Validators.required),
//       address: new FormControl('', Validators.required),
//       membership: new FormControl('', Validators.required)
//     });
//   }

//   onSubmit(): void {
//     if (this.profileForm.valid) {
//       console.log('User Profile:', this.profileForm.value);
//       alert('Profile saved successfully!');
//     }
//   }
// }

