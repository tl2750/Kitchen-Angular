import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Router} from '@angular/router'
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class Service1Service {
  login_url = 'http://3.15.178.94/login/';
  logout_url = 'http://3.15.178.94/logout/';
  signup_url = 'http://3.15.178.94/signup/'

  public login : boolean = false;
  public username : string;
  public provider : boolean;
  
  constructor( private HttpClient: HttpClient, public Router:Router ) { }

  login_user(formData){
    return this.HttpClient.post<any>(this.login_url, formData ,{/*observe:'response' as 'body',*/ withCredentials: true})
  }
  

  logout_user(){
    this.HttpClient.post<any>(this.logout_url, {}).subscribe((response)=>{
      this.logout()
    })
  }

  logout(){
    this.login = false;
    this.provider = false;
    this.username = null;
    localStorage.setItem('login', 'false');
    localStorage.setItem('username', null);
    localStorage.setItem('provider', 'false');
    this.go_home()
  }

  go_home(){
    this.Router.navigate(['']) 
  }

  sign_up(data){
    return this.HttpClient.post<any>(this.signup_url, data)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }



}


// httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
//   withCredentials: true, 
//   observe: 'response'  }; 