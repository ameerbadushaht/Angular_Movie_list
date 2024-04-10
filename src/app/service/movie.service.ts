import axios from 'axios';
import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movies } from '../components/admin/movie-manage/movie-add/movie-add.component';
// import { Theaters } from '../components/theater-add/theater-add.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  updateMovie(id: any, value: any):void {
    throw new Error('Method not implemented.');
  }


  constructor(
    private http: HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}


  addMovies(movie: any): Observable<any> {
    console.log('here Before addMovie service:::', movie);
    const response =  this.http.post(`movies/addMovies`, movie);
    console.log('here after addMovie service:::', movie,"and response :: ",response);
    return response;
  }


  getMovies(): Observable<any> {
    return this.http.get<any>(`movies/getMovies`);
  }

  getTheater(): Observable<any> {
    return this.http.get<any>(`movies/gettheater`);
  }


  ///==================== Movie Details from MongoDB
  getMovieDetails(movieId: string): Observable<Movies> {
    return this.http.get<any>(
      `movies/getMoviesById/${movieId}`
    );
  }

}



//   updateMovie(id: number, value: any): any {
//     const moviesUrl = `${`http://localhost:3000/movies`}/${id}`;
//     this.http.put(moviesUrl, value).subscribe(
//       () => {
//         // Update successful
//         this.movieData.update((movies) => {
//           const updatedMovies = movies.map((movie) => {
//             if (movie.id === id) {
//               return { ...movie, ...value };
//             }
//             return movie;
//           });
//           return updatedMovies;
//         });

//         setTimeout(() => {
//           this.spinner.hide();
//           this.router.navigate(['/movieDetails', id]);
//           Swal.fire({
//             title: 'Success',
//             text: 'Movie updated successfully.',
//             icon: 'success',
//           });
//         }, 5000);
//       },
//       (error) => {
//         this.spinner.hide();
//         Swal.fire({
//           title: 'ERROR',
//           text: 'Error updating movie.',
//           icon: 'error',
//         });
//         console.error('Error updating movie:', error);
//       }
//     );
//   }
// }


 // private moviesUrl = 'http://localhost:3000/movies';
  // private theaterUrl = 'http://localhost:3000/theater'

  //signal created
  // public movieData = signal<Movies[]>([]);
  // public theaterData = signal<Theaters[]>([]);
  // public transactionID: any[];
  // baseUrl: any;

  //========== theater details in movie Details form JSON

  // getTheatersForMovie(movieTitle: string): Observable<Theaters[]> {
  //   return this.http
  //     .get<Theaters[]>(`http://localhost:3000/theater`)
  //     .pipe(
  //       map((theaters) =>
  //         theaters.filter((theater) => theater.movies.includes(movieTitle))
  //       )
  //     );
  // }

// setMovies(movie: string) {
  // this.movieData.mutate((val) => {
  //   val.push(movie);
  // });
// }


 // ========================== ////

  // getMovies(): Observable<any> {
  //   return this.http.get<any>(`http://localhost:3000/movies`);
  // }


  ///=========================== Movie Details from JSON server============////

  // getMovieDetails(movieId: number): Observable<Movies> {
  //   return this.http
  //     .get<Movies[]>(`http://localhost:3000/movies`)
  //     .pipe(map((movies) => movies.find((movie) => movie.id === movieId)));
  // }

  // setTheater(theater: Theaters) {
  //   this.theaterData.mutate((val) => {
  //     val.push(theater);
  //     console.log('here set Theater service');
  //   });
  // }
  // updateMovie(id: number, value: any): Observable<any> {
  //   const moviesUrl = `${`http://localhost:3000/movies`}/${id}`;
  //   return this.http.put(moviesUrl, value);
  // }

  //////====== Update With Signals =====\\\\\\\\

  // updateMovie(id: number, value: any) {
  //   const moviesUrl = `${`http://localhost:3000/movies`}/${id}`;
  //   this.http.put(moviesUrl, value).subscribe(() => {
  //     // Update the movie data signal
  //     this.movieData.update((movies) => {
  //       const updatedMovies = movies.map((movie) => {
  //         if (movie.id === id) {
  //           return { ...movie, ...value }
  //         }
  //         return movie;
  //       });
  //       return updatedMovies;
  //     });
  //     // console.log('Movie updated successfully');
  //     this.router.navigate(['/movieDetails',id]);
  //   }, (error) => {
  //     console.error('Error updating movie:', error);
  //   });

  // }
