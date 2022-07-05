import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/Contracts/Movie';
import { MoviesService } from '../Services/movies.service';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../Services/users.service';
import { User } from 'src/Contracts/User';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  currentUser: User;
  isLoggedIn : boolean;
  isWatchedByUser : boolean;
  isFavourite : boolean;
  formData: FormGroup;
  review : string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private location: Location,
    private userService : UsersService
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.isLoggedIn = localStorage.getItem("isUserLoggedIn") == "true";
    if(this.isLoggedIn)
      this.InitializeUser();

      this.formData = new FormGroup({
        review: new FormControl("No review"),
     });
  }

  InitializeUser() : void {
    let defaultUser : User;
    defaultUser = {
      favourites : [""],
      id : 1,
      isAdmin : true,
      isPrime : true,
      moviesWatched : [],
      name : "Radhe"
      }
    if(localStorage.getItem("LoggedInUser") != undefined){
      let id : number = Number(localStorage.getItem("LoggedInUser"));
      console.log(`user id: {id}`);
      this.currentUser = this.userService.getUserDetails(id) ??  defaultUser;
    }
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie =this.movieService.getMoview(id);
  }

  goBack(): void {
    this.location.back();
  }


  AddMovieToUserWatchList() : void {
    if(this.isWatchedByUser)
      this.userService.addMovieToWatched(this.currentUser, this.movie.name);
  }

  AddMovieToFavourite() : void {
    console.log('func called');
    if(this.isFavourite){
      console.log(`{this.movie.name} is fav one!`)
      this.userService.addMovieToFavourites(this.currentUser, this.movie.name);
    }
  }

  onClickSubmit(data: any) {
    console.log("Review " + data.review);
    this.movie.reviews.push(data.review);
    let result = this.movieService.addUserReview(this.movie)
  };

}
