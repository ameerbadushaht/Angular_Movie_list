import { Component } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-manage',
  templateUrl: './movie-manage.component.html',
  styleUrls: ['./movie-manage.component.scss']
})
export class MovieManageComponent {

  movies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
      // console.log('home movies : ', this.movies);

    });
  }

  // getMovies(): void {
  //   this.movieService.getMovies()
  //     .subscribe(movies => this.movies = movies);
  // }

  editMovie(movie: any): void {
    // Handle editing movie
    // You can navigate to another component for editing or show a modal, etc.
  }

  deleteMovie(id: number): void {
    // Handle deleting movie
    // You can call a service method to delete the movie from the server
  }

}
