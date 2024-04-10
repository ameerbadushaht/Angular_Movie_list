import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(2)]],
    });
  }
  onSubmit() {
    const newUser = this.signupForm.value;
    console.log('Before submitted', newUser);

    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      this.authService.signup(email, password).subscribe(
        response => {
          console.log('response::',response);

          if (response.statusCode === 409) {
            // Email already registered error
            console.log('Email already registered!');
          console.log('response::',response.statusCode);

            Swal.fire({
              title: 'Email Already Exists!',
              text: 'This email address is already registered with another account.',
              icon: 'warning',
            });
          } else {
            // Signup successful
            console.log('User created successfully!');
            this.clearForm();
            // this.router.navigate(['/login']);
            // ...
            Swal.fire({
              title: 'Success!',
              text: 'Successfully Created Account, Please Login!',

              icon: 'success',
            }).then(() => {
              this.router.navigate(['/logIn']).then(() => {
                // Delayed navigation to give Angular time to detect the route change
                // setTimeout(() => {
                //   window.location.reload();
                // });
              });
            });
          }
        },
        error => {
          console.error(error);
          // Handle other errors
        }
      );
    }

  }


  clearForm() {
    this.signupForm.reset();
  }
}
