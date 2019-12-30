import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-route-param',
  templateUrl: './route-param.component.html',
  styleUrls: ['./route-param.component.css']
})


export class RouteParamComponent implements OnInit {
  
  public department_id;
  public kitchens ;
  constructor(private ActivatedRoute : ActivatedRoute, 
              private Router: Router,
              private HttpClient : HttpClient
              ) {}
  async ngOnInit() {
    // let id = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id'))
    // this.department_id = id
    this.ActivatedRoute.paramMap.subscribe( params =>{
      console.log( params) 
      let id = parseInt(params.get('id'))
      this.department_id = id
    })


  }

  goPrevious(){
    this.department_id = this.department_id - 1
    this.Router.navigate(['/department', this.department_id])
  }

  goNext(){
    this.department_id = this.department_id + 1
    this.Router.navigate(['/department', this.department_id])
  }
}
