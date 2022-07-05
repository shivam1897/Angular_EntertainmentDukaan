import { Injectable } from '@angular/core';
import { Movies } from '../mock-movies';
import { Movie } from 'src/Contracts/Movie';

@Injectable({ providedIn: 'root' })
export class MoviesService {

  constructor() { }

  getListOfMovies() : Movie[]{
    return Movies
  }

  getMoview(id : number){
    const movie = Movies.find(h => h.id === id)!;
    return movie;
  }
  
  addMovieToList(movie : Movie){
    console.log(`Movie id : ${movie.id}, name: ${movie.name} , rating: ${movie.rating}added to list`)
    Movies.push(movie);
  }
  addUserReview(newMovie : Movie): void{
    let updateItem = Movies.find(x => x.id == newMovie.id);

    if(updateItem != undefined){
      let index = Movies.indexOf(updateItem);
      console.log('Movie earlier:' + Movies[index].reviews.values.length);
      Movies[index] = newMovie;
      console.log('Movie updated:' + Movies[index].reviews.values.length);
    }
  }
}
