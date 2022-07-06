import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  formData: FormGroup;

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
       userName: new FormControl("Shivam"),
       password: new FormControl("admin"),
    });
 }

 onClickSubmit(data: any) : boolean{
    this.userName = data.userName;
    this.password = data.password;

    console.log("Login page: " + this.userName);
    console.log("Login page: " + this.password);

    let result = this.authService.login(this.userName, this.password)
    console.log("Is Login Success: " + result); 
    if(!result){
      alert("No credentials found against this user.");
      return false;
    }
    if(result) this.router.navigate(['/dashboard']); 
    return true;
  };
}


