import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router} from '@angular/router'

import { Service1Service} from './service/service1.service'
// import {  }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public login = false;
  public username : string = null;
  public provider : boolean;
  constructor(private HttpClient : HttpClient, private Router : Router,public LoginService: Service1Service
    
    ){}
  
  ngOnInit() {    // this.Router.navigate(['']) 
    this.getFeedBack('login') == false? this.LoginService.login = false : this.LoginService.login = true
    this.getFeedBack('provider') == false ? this.LoginService.provider = false : this.LoginService.provider = true
    this.LoginService.username = localStorage.getItem('username')

    if(this.LoginService.login == false ){
      this.home()
    }
    
  }
  
  getFeedBack(value):any {
    if(localStorage.getItem(value) === null || localStorage.getItem(value).toString() === 'false' || localStorage.getItem(value) == undefined){
      return false
    }
    return true
    
  }

  

  cart_url(){
    this.Router.navigate(['shoppingCart']) 
  }
  home(){
    this.Router.navigate(['']) 
  }
  
  addKitchenForm(){
    this.Router.navigate(['addKitchen']) 
  }

}
