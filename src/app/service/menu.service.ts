import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu_url = 'http://3.15.178.94/view/menu/kitchen'
  provider_menu_url = 'http://3.15.178.94/menu/kitchen/';
  addToCart_url = 'http://3.15.178.94/addToCart/';

  constructor(private HttpClient: HttpClient) { }

  getBuyerMenu(id){
    return this.HttpClient.get(this.menu_url+id, {/*observe:'response' as 'body',*/ withCredentials: true})
  }

  getProviderMenu(id ){
    return this.HttpClient.get(this.provider_menu_url+id+'/', {/*observe:'response' as 'body',*/ withCredentials: true})
  }

  addDishToMenu(id, data){
    return this.HttpClient.post(this.provider_menu_url+id+'/', data ,{/*observe:'response' as 'body',*/ withCredentials: true})
  }

  addToCart(data){
    return this.HttpClient.post(this.addToCart_url, data ,{/*observe:'response' as 'body',*/ withCredentials: true})
  }


}
