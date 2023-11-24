

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';


@Component({
  selector: 'app-movie-detailed',
  templateUrl: './movie-detailed.component.html',
  styleUrls: ['./movie-detailed.component.scss']
})
export class MovieDetailedComponent implements OnInit {

  movie: any = {};
  theaters: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit() {

    const movieId = this.route.snapshot.paramMap.get('id');
    console.log("this a movie ID::",movieId)
    this.movieService.getMovieDetails(Number(movieId)).subscribe((movie) => {
      this.movie = movie;
      // console.log(this.movie.title);

      // this.movieService.getTheatersForMovie(this.movie.title).subscribe(theaters => {
      //   this.theaters = theaters;
      // });

      this.movieService.getTheatersForMovie(this.movie.title).subscribe(uniqueTheaters => {
        this.theaters = uniqueTheaters;
      });

    });
  }

  editMovie(movieId:number) {
  this.router.navigate(['/edit',movieId]);
  console.log(movieId)
    }

  goBack() {
    // Navigate back to the previous page
    this.router.navigate(['/']);
  }


}
