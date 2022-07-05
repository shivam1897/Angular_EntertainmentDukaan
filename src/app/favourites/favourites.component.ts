import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/Contracts/Movie';
import { User } from 'src/Contracts/User';
import { MoviesService } from '../Services/movies.service';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  movies : Movie[]
  user : User | undefined
  constructor(private movieService : MoviesService, private userService : UsersService) {

   }

  ngOnInit(): void {
    this.movies = this.movieService.getListOfMovies();
    let id = Number(localStorage.getItem('LoggedInUser'))
    this.user = this.userService.getUserDetails(id);
  }

  ngOnChanges(){
    let id = Number(localStorage.getItem('LoggedInUser'))
    this.user = this.userService.getUserDetails(id);
  }


}
