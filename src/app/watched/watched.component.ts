import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/Contracts/Movie';
import { User } from 'src/Contracts/User';
import { MoviesService } from '../Services/movies.service';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.scss']
})
export class WatchedComponent implements OnInit {

  user : User | undefined
  constructor( private userService : UsersService) {

   }


  ngOnInit(): void {
    let id = Number(localStorage.getItem('LoggedInUser'))
    this.user = this.userService.getUserDetails(id);
  }
}
