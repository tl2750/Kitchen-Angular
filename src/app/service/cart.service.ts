import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart_url = 'http://3.15.178.94/shoppingCart/'
  remove_cart_url = 'http://3.15.178.94/removeDish/'
  purchase_url =  'http://3.15.178.94/purchase/'

  constructor(private HttpClient: HttpClient){}
  
  get getForm(){
    const formData = new FormData();
    formData.append("CSRF_TOKEN", '{{ csrf_token() }}')
    return formData
  }

  get_cart_request(){
    return this.HttpClient.get<any>(this.cart_url, {/*observe:'response' as 'body',*/ withCredentials: true})
  }

  removeFromCart(item){
    
    return this.HttpClient.post<any>(this.remove_cart_url + item.id.toString(), this.getForm,{/*observe:'response' as 'body',*/ withCredentials: true})
  }

  purchase(){
    return this.HttpClient.post<any>(this.purchase_url, this.getForm,{/*observe:'response' as 'body',*/ withCredentials: true})
  }


  

}
