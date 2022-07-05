import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/Contracts/Movie';
import { MoviesService } from '../Services/movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  Movies : Movie[] = [];
  constructor(private movieService : MoviesService) {
   }

  ngOnInit(): void {
    this.Movies = this.movieService.getListOfMovies();
  }

}
