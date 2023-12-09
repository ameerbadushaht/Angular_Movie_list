// import { Component } from '@angular/core';
// import { MovieService } from 'src/app/service/movie.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss']
// })
// export class HomeComponent {
//   movies: any[] = [];
//   constructor(private movieService: MovieService) {}

//   ngOnInit() {
//     this.movieService.getMovies().subscribe(data => {
//       this.movies = data.movies;
//       console.log('movie::',this.movies)
//     });
//   }
// }



import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
loading: any;

}
