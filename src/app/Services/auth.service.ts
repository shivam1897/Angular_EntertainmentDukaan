import { Injectable } from '@angular/core';
import { User } from 'src/Contracts/User';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLoggedIn: boolean = false;
  registeredUsers : User [] = [];

  login(userName: string, password: string): boolean {
    console.log(userName);
    console.log(password);
    let requestingUser = this.registeredUsers.find(x => x.name == userName);
    
    if(requestingUser != undefined){
      this.isUserLoggedIn = true;
      localStorage.setItem('isUserLoggedIn', "true"); 
      localStorage.setItem('LoggedInUser', requestingUser.id.toString());
      if(requestingUser.isAdmin)
        localStorage.setItem('isAdminUser', "true");
      return true;
    }
    return false;
  }

  logout(): void {
    console.log("logging out");
    this.isUserLoggedIn = false;
       localStorage.setItem('isUserLoggedIn', "false"); 
       localStorage.setItem('isAdminUser', "false"); 
       localStorage.removeItem('LoggedInUser');
    }
  
  constructor(private userService : UsersService) { 
    this.IntializeUsers();
    
  }

  private IntializeUsers() : void{
      localStorage.setItem('isUserLoggedIn', "false"); 
      localStorage.setItem('isAdminUser', "false");
      this.registeredUsers = this.userService.getListOfUsers();
  }

}
