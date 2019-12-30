import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service'
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  public dishes;
  public kitchen_name;
  public kitchen_id;
  public is_vegan = false

  constructor( public MenuService: MenuService, public ActivatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.kitchen_id = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id'))
    let response = await this.MenuService.getProviderMenu(this.kitchen_id)
    response.subscribe(async (resp)=>{
      this.dishes = await resp['dishes']
      this.kitchen_name = await resp['kitchen_name']

    },
    (err)=> {
      alert('Error in Kitchen View')
    })
  }

  async addDish(form){
    const formData = new FormData();
    formData.append("CSRF_TOKEN", '{{ csrf_token() }}')
    formData.append("dish_name", form.value.dish_name)
    formData.append("price", form.value.price)
    formData.append('is_vegan',  this.is_vegan.toString())
    
    let response = await this.MenuService.addDishToMenu(this.kitchen_id, formData )
    response.subscribe(async (resp)=>{
      this.ngOnInit()
    })

  }

  vegan_let(){
    this.is_vegan = ! this.is_vegan

  }

}
