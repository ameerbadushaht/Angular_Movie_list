import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {


  movies: any[] = [];

  constructor(private movieService: MovieService,private router: Router) {}

  ngOnInit() {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
      // console.log('home movies : ', this.movies);
    });
  }

  onCardClick(movieId: number) {

    this.router.navigate(['/movieDetails', movieId]);
  }
}

