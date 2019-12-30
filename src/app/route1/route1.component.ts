import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Router } from '@angular/router';


@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})

export class Route1Component implements OnInit {
  public kitchens : any 

  constructor(private router: Router,
              private HttpClient: HttpClient
  ){}

  ngOnInit() {
    this.HttpClient.get('http://3.15.178.94').subscribe(response => {
        this.kitchens = response['kitchens'];
    })


  }

  goMenu(id:number){
    console.log("I am in goDetail")
    this.router.navigate(['/view/menu/kitchen/'+id]);
  }



}
