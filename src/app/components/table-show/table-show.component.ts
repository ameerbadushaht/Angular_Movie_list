import { Component, WritableSignal, signal } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';


@Component({
  selector: 'app-table-show',
  templateUrl: './table-show.component.html',
  styleUrls: ['./table-show.component.scss']
})
export class TableShowComponent {
  movies: any[] = [];

constructor(public movieService: MovieService) {}

ngOnInit() {
  this.movieService.getMovies().subscribe((data) => {
    this.movies = data;
    console.log('home movies : ', this.movies);

  });
}

}
