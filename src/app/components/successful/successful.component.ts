import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.scss']
})
export class SuccessfulComponent {

  constructor(private router: Router,public payment: MovieService) { }
goToHome() {
this.router.navigate(['/']);
}

}
