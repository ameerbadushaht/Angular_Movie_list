import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
loginForm: FormGroup;

constructor( private formBuilder: FormBuilder,
  // private router:Router,
  public authService: AuthService){

  this.loginForm = this.formBuilder.group({
    email: [''],
    password: ['']
  });
  }
onSubmit() {
  const user = this.loginForm.value;
  console.log('Before submitted', user);
  // this.authService.logIn(user)
  this.authService.LogIn(user);
}

}
