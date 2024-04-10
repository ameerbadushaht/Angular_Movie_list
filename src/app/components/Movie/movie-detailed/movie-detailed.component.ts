import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-detailed',
  templateUrl: './movie-detailed.component.html',
  styleUrls: ['./movie-detailed.component.scss'],
})
export class MovieDetailedComponent implements OnInit  {
  movie: any = {};
  theaters: any[] = [];
  loading: any;
  moviesCard: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private spinner: NgxSpinnerService
  ) {}


  ngOnInit() {

    const movieId = this.route.snapshot.paramMap.get('id');
    console.log('this a movie ID::', movieId);

    /// ==== MongoDB ====//

    this.movieService.getMovieDetails(movieId).subscribe(
      (data) => {
        // Handle the response data as needed
        console.log('Movie details:', data);
        this.movie = data;
      },
      (error) => {
        console.error('Error fetching movie details:', error);
      }
    );


    // movie cards

    this.movieService.getMovies().subscribe((data) => {
      this.moviesCard = data;
      console.log( this.moviesCard,"Movies in movie card")
      // console.log('home movies : ', this.movies);
    });

  }

  editMovie(movieId: number) {

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {

      this.spinner.hide();
      this.router.navigate(['/edit', movieId]);
    }, 1500);
    // this.router.navigate(['/edit', movieId]);
    console.log(movieId);
  }
  onCardClick(movieId: number) {
    this.spinner.show();

    setTimeout(() => {
      console.log(movieId)

              this.spinner.hide();
              this.router.navigate(['/movieDetails',movieId]);

            }, 1500);
  }
  goBack() {
    // Navigate back to the previous page
    this.router.navigate(['/']);
  }
}
