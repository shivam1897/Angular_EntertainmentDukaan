import { Injectable } from '@angular/core';
import { User } from 'src/Contracts/User';
import { Users } from '../mock-users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getListOfUsers() : User[]{
    return Users;
  }

  getUserDetails(id : number):User | undefined{
    return Users.find(x => x.id == id);
  }

  addMovieToWatched(user : User, movie : string) : void {
    let updateItem = Users.find(x => x.id == user.id);
    console.log(`Adding to watched list for ${updateItem?.name}`)
    if(updateItem != undefined){
      let index = Users.indexOf(updateItem);
      updateItem.moviesWatched.push(movie);
      console.log(`watch list ${updateItem.moviesWatched}`)
      Users[index] = updateItem;
      console.log(`watch list ${Users[index].moviesWatched}`)
    }
  }

  addMovieToFavourites(user : User, movie : string) : void {
    let updateItem = Users.find(x => x.id == user.id);

    if(updateItem != undefined){
      let index = Users.indexOf(updateItem);
      updateItem.favourites.push(movie);
      Users[index] = updateItem;
      console.log(`updated fav lists`);
    }
  }
  
}
