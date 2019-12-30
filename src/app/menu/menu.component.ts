import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service'
import {ActivatedRoute} from '@angular/router'
import { Service1Service  } from '../service/service1.service'

import {trigger, state, style, animate, transition } from '@angular/animations'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('MenuComponent', [

      state('initial', style({
        opacity: 0,
      })),
      state('final', style({
        opacity: 1,
        backgroundColor: 'green',
      })),
      transition('initial=>final', animate('200ms')),
    ]),
  ]


})
export class MenuComponent implements OnInit {
  kitchen_id: number;
  dishes: any;
  kitchen_name: any;

  currentState='initial'


  constructor(public MenuService: MenuService, public ActivatedRoute: ActivatedRoute, public LoginService: Service1Service) { }

  async ngOnInit() {
    this.kitchen_id = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id'))
    let response = await this.MenuService.getBuyerMenu(this.kitchen_id)
    response.subscribe(async (resp)=>{
      this.dishes = await resp['dishes']
      this.kitchen_name = await resp['kitchen_name']

    },
    (err)=> {
      alert('Error in Kitchen View')
    })
  }

  async addToCart(dish){
    const formData = new FormData();
    formData.append("CSRF_TOKEN", '{{ csrf_token() }}')
    formData.append("dish_id", dish.id)
    this.currentState = 'final'
    
    let response = await this.MenuService.addToCart(formData)
    response.subscribe((resp)=>{
      this.currentState = 'initial'
    })

  }
  
  delay(ms: number) { 
    return new Promise( resolve => setTimeout(resolve, ms) ); 
  }
}