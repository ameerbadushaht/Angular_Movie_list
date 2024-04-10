import { Component } from '@angular/core';
import { Theaters } from '../../Theator/theater-add/theater-add.component';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-theater-manage',
  templateUrl: './theater-manage.component.html',
  styleUrls: ['./theater-manage.component.scss']
})
export class TheaterManageComponent {

  theater:any[]=[]

constructor(private movieService: MovieService) { }
ngOnInit(): void {

  this.movieService.getTheater()

  this.movieService.getTheater().subscribe((data) => {
    this.theater = data;
    console.log('here theater ng oninit', data);
  });

}

editTheater(theater:any){

}

deleteTheater(id:any){

}

}
