import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/service/auth.service';
import { LoaderService } from 'src/app/service/loader.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss'],
})
export class MovieEditComponent implements OnInit {
  movieForm: FormGroup;
  EditForm: FormGroup;
  movie: any = {};
  accessToken: string | null;
  loading: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    public movieService: MovieService,
    private spinner: NgxSpinnerService
  ) {
    this.accessToken = this.authService.getToken();
  }

  ngOnInit() {
    this.movieForm = this.formBuilder.group({
      title: [null, [Validators.required, this.capital]],
      duration: [null, [Validators.required, this.minDuration]],
      releaseDate: [null],
      language: [null, [Validators.required, this.capital]],
      imageUrl: [null, Validators.required],
    });
    const movieId = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(movieId).subscribe((movie) => {
      this.movie = movie;
    });
  }

  // onSubmit() {
  //   if (this.movieForm.valid) {
  //     this.movieService.updateMovie(this.movie.id, this.movieForm.value)
  //   this.clearForm();
  // }

  onSubmit() {
    if (this.movieForm.valid) {
      // hide the spinner after 5 seconds
      this.spinner.show();
      this.movieService
        .updateMovie(this.movie.id, this.movieForm.value)
        // .subscribe(
        //   () => {
        //     this.clearForm();
        //   },
        //   (error) => {
        //     this.spinner.hide();
        //     console.error('Error updating movie:', error);
        //   }
        // );
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

  // update(movieId: number) {
  //   this.router.navigate(['/movieDetails', movieId]);
  //   console.log(movieId);
  // }
}
