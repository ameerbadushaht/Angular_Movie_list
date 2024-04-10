import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Theaters } from '../../../Theator/theater-add/theater-add.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss'],
})
export class MovieAddComponent {
  movies: any[] = [];
  movieForm: FormGroup;
  accessToken: string | null;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private http: HttpClient,
    public movieService: MovieService
  ) {
    this.accessToken = this.authService.getToken();
  }
  ngOnInit() {
    this.movieForm = this.formBuilder.group({
      title: [null, [Validators.required, this.capital]],
      duration: [null, [Validators.required, this.minDuration]],
      releaseDate: [null, Validators.required],
      language: [null, [Validators.required, this.capital]],
      imageUrl: [null, Validators.required],
    });
    this.movieService.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }

  // onSubmit() {
  //   if (this.movieForm.valid) {
  //     const newMovie = this.movieForm.value;
  //     this.movieService.addMovies(newMovie);
  //     console.log(newMovie, 'Movie Added');
  //     this.clearForm();
  //   }
  // }

  onSubmit() {
    if (this.movieForm.valid) {
      const newMovie = this.movieForm.value;
      this.movieService.addMovies(newMovie).subscribe(
        (response) => {
          console.log('Movie Added:', response);
          this.clearForm();
        },
        (error) => {
          console.error('Error adding movie:', error);
        }
      );
    }
  }






  clearForm() {
    this.movieForm.reset();
  }

  capital(control: FormControl) {
    const value = control.value;
    if (value) {
      const firstLetter = value.charAt(0);
      const isFirstLetterUpperCase = firstLetter === firstLetter.toUpperCase();
      if (!isFirstLetterUpperCase) {
        return { capital: true };
      }
    }
    return null;
  }

  minDuration(control: FormControl) {
    const value = control.value;
    const hasNumber = value > 40;
    if (!hasNumber) {
      return { duration: true };
    }
    return null;
  }
}

export interface Movies {
  includes(movieTitle: string): unknown;
  title: string;
  duration: number;
  releaseDate: string;
  theater: Theaters;
  language: string;
  imageUrl: string;
  id: number;
}

// onSubmit() {
//   if (this.movieForm.valid) {
//     const newMovie = this.movieForm.value;
/// JSON

// this.http.post('http://localhost:3000/movies', newMovie).subscribe(
//   (response) => {
//     this.movieService.setMovies(newMovie);
//     console.log(response);
//     this.clearForm();
//   },
//   (error) => {
//     console.error('Error adding movie: ', error);
//   }
// );
//   }
// }
