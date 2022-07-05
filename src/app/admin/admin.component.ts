import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from 'src/Contracts/Movie';
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  name: string;
  rating: number;
  language: string;
  formData: FormGroup;

  constructor(private movieService : MoviesService, private router : Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl(""),
      rating: new FormControl(""),
      language: new FormControl("")
    });
  }
  
    onClickSubmit(data: any) {
      let movie : Movie = {
        id : this.movieService.getListOfMovies().length,
        language : data.language,
        name : data.name,
        rating : data.rating,
        reviews : []
      }

      this.movieService.addMovieToList(movie)
    };
    

}
