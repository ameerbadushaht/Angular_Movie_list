import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
loginForm: FormGroup;

constructor( private formBuilder: FormBuilder,
  private router:Router,
  public authService: AuthService){

  this.loginForm = this.formBuilder.group({
    email: [''],
    password: ['']
  });
  }
onSubmit() {
  const { email, password } = this.loginForm.value;
  console.log('Before submitted', email, password);
  this.authService.login(email, password).subscribe(
    response => {
      console.log(response);
      if (response.accessToken) {
        this.authService.saveToken(response.accessToken, response.role);
        console.log('set role',response.role);
        this.authService.setUserRole(response.role);
      }
      // this.router.navigate(['/']).then(() => {
      //   // Delayed navigation to give Angular time to detect the route change
      //   // setTimeout(() => {
      //   //   window.location.reload();
      //   // });
      // }
      // );

      Swal.fire({
        title: 'Success!',
        text: 'You have successfully logged in!',
        icon: 'success',
      }).then(() => {
        this.router.navigate(['/']).then(() => {
          // Delayed navigation to give Angular time to detect the route change
          setTimeout(() => {
            window.location.reload();
          });
        });
      });

    },
    error => {
      console.error(error); // Handle error
    }

  );
}

}
