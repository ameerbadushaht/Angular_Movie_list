import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movies } from '../components/movie-add/movie-add.component';
import { Theaters } from '../components/theater-add/theater-add.component';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  // private moviesUrl = 'http://localhost:3000/movies';
  // private theaterUrl = 'http://localhost:3000/theater'

  //signal created
  public movieData = signal<Movies[]>([]);
  public theaterData = signal<Theaters[]>([]);
  public transactionID: any[];

  constructor(private http: HttpClient) {}


  /// ===== Signal ========= //////
  setMovies(movie: Movies) {
    this.movieData.mutate((val) => {
      val.push(movie);
    });
  }

  setTheater(theater: Theaters) {
    this.theaterData.mutate((val) => {
      val.push(theater);
      console.log("here set Theater service")
    });
  }

// ========================== ////

  getMovies(): Observable<any> {
    return this.http.get<any>(`movies`);
  }

  getTheater():Observable<any>{
    return this.http.get<any>(`theater`);

  }
  getMovieDetails(movieId: number): Observable<Movies> {
    return this.http.get<Movies[]>(`movies`).pipe(
      map((movies) => movies.find((movie) => movie.id === movieId))
    );
  }


  // theater details in movie Details

  getTheatersForMovie(movieTitle: string): Observable<Theaters[]> {
    return this.http.get<Theaters[]>(`theater`).pipe(
      map(theaters => theaters.filter(theater => theater.movies.includes(movieTitle)))
    );
  }


  updateMovie(id: number, value: any): Observable<any> {
    const moviesUrl = `${`movies`}/${id}`;
    return this.http.put(moviesUrl, value);
  }

}
