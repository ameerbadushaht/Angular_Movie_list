import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MovieService } from 'src/app/service/movie.service';
// import { Movies } from 'src/app/service/movie.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-theater-add',
  templateUrl: './theater-add.component.html',
  styleUrls: ['./theater-add.component.scss'],
})
export class TheaterAddComponent {
  theater: any[] = [];
  allMovies: any[] = [];
  filteredMovies: any[] = [];
  accessToken: string | null;

  isMoviesInputFocused: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    public movieService: MovieService
  ) {
    this.accessToken = this.authService.getToken();
  }

  theaterForm = this.formBuilder.group({
    name: [null, [Validators.required, this.capital]],
    movies: [null, [Validators.required]],
    date: [null, Validators.required],
    ticketPrice: [null, [Validators.required, Validators.min(70)]],
  });
  ngOnInit() {


    // theater list

    this.movieService.getTheater().subscribe((data) => {
      this.theater = data;
      // console.log('here theater ng oninit', data);
    });


    // All movies

    this.movieService.getMovies().subscribe((data) => {
      this.filteredMovies = data;
      // console.log('this.filteredMovies id:', this.filteredMovies[2]._id);
    });


  }

  // filterMovies(value: string): any[] {
  //   const filterValue = value.toLowerCase();
  //   return this.allMovies.filter((movie) =>
  //     movie.title.toLowerCase().includes(filterValue)
  //   );
  // }


  onSubmit() {
    if (this.theaterForm.valid) {
      // const newTheater = this.theaterForm.value;
      const newTheater: Theaters = {
        name: this.theaterForm.value.name,
        movies: this.theaterForm.value.movies, // Add the necessary value for the 'movies' property
        date: this.theaterForm.value.date,
        ticketPrice: this.theaterForm.value.ticketPrice,
      };
      console.log('adding new theater ',newTheater);

      this.http.post(`movies/addTheaters`, newTheater).subscribe(
        (response) => {
          // this.movieService.setTheater(newTheater);
          console.log(response);
          console.log('here theater set:::');
          this.clearForm();
        },
        (error) => {
          console.error('Error adding movie: ', error);
        }
      );
    }
  }
  clearForm() {
    this.theaterForm.reset();
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
}

export interface Theaters {
  name?: string;
  movies: string[];
  date: string;
  ticketPrice: number;
}
