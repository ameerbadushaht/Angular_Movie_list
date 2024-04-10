import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject } from 'rxjs';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  movies: any[] = [];
  loading: any;

  constructor(private movieService: MovieService, private router: Router,private spinner: NgxSpinnerService) {}
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();
  ngOnInit() {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
      // console.log( this.movies,"Movies in movie card")
      // console.log('home movies : ', this.movies);
    });
  }

  onCardClick(movieId: number) {
    this.spinner.show();

    setTimeout(() => {
      console.log(movieId)

              this.spinner.hide();
              this.router.navigate(['/movieDetails',movieId]);

            }, 1500);

  }
}
