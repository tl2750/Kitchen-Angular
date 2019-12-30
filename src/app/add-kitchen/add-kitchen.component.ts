import { Component, OnInit } from '@angular/core';
import { KitchenService } from '../service/kitchen.service'
import {  Router } from '@angular/router';




@Component({
  selector: 'app-add-kitchen',
  templateUrl: './add-kitchen.component.html',
  styleUrls: ['./add-kitchen.component.css']
})
export class AddKitchenComponent implements OnInit {

  public imageFile 

  constructor(public KitchenService: KitchenService , public Router:Router) { }

  ngOnInit() {
  }


  async add_kitchen(form){
    const formData = new FormData();
    
    await this.delay(300)
    console.log(form.value)    
    formData.append("CSRF_TOKEN", '{{ csrf_token() }}')
    await formData.append("kitchen_name", form.value.kitchen_name)
    formData.append("image", this.imageFile)
    
    let repsonse = await this.KitchenService.addKitchen(formData)
    repsonse.subscribe((resp)=>{
      console.log(resp)
      this.Router.navigate(['myKitchen'])
    })


  }

  delay(ms: number) { 
    return new Promise( resolve => setTimeout(resolve, ms) ); 
  }

  saveImage(files){
    this.imageFile = files.item(0);
  }

}
