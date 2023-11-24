import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

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
      this.authService.signUp(newUser).subscribe((response) => {
        console.log('submitted', newUser);
       this.router.navigateByUrl('/logIn')
        this.clearForm();
      },
      (error) => {
        console.error('Error during signup:', error);
        // Handle error appropriately (e.g., show a message to the user)
      });
    }
  }

  clearForm() {
    this.signupForm.reset();
  }
}
