import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/Contracts/Movie';
import { MoviesService } from '../Services/movies.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isLoggedIn : boolean;
  isAdmin : boolean;

  movies: Movie[] = [];
  
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.getHeroes()
    this.isAdmin = localStorage.getItem("isAdminUser") == "true";
    this.isLoggedIn = localStorage.getItem("isUserLoggedIn") == "true";
  }

  getHeroes(): void {
    this.movies = this.movieService.getListOfMovies();
  }

}
