import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MovieService } from 'src/app/service/movie.service';
import { Movies } from '../movie-add/movie-add.component';

@Component({
  selector: 'app-theater-add',
  templateUrl: './theater-add.component.html',
  styleUrls: ['./theater-add.component.scss'],
})
export class TheaterAddComponent {
  theater: any[] = [];
  allMovies: any[] = [];
  filteredMovies: any[] = [];
  theaterForm: FormGroup;

  isMoviesInputFocused: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public movieService: MovieService
  ) {}

  ngOnInit() {
    this.theaterForm = this.formBuilder.group({
      name: [null, [Validators.required, this.capital]],
      movies: [null, [Validators.required]],
      date: [null, Validators.required],
      ticketPrice: [null, [Validators.required, Validators.min(70)]],
    });

    // theater list

    this.movieService.getTheater().subscribe((data) => {
      this.theater = data;
      console.log('here theater ng oninit', data);
    });


    // All movies

    this.movieService.getMovies().subscribe((data) => {
      this.filteredMovies = data;
    });
  }

  filterMovies(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(filterValue)
    );
  }


  onSubmit() {
    if (this.theaterForm.valid) {
      const newTheater = this.theaterForm.value;
      this.http.post('http://localhost:3000/theater', newTheater).subscribe(
        (response) => {
          this.movieService.setTheater(newTheater);
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
  name: string;
  movies: Movies;
  date: string;
  ticketPrice: number;
}
