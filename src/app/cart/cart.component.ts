import { Component, OnInit, ElementRef} from '@angular/core';
import { CartService  } from '../service/cart.service';
import { Service1Service} from '../service/service1.service'
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  public cart ;
  
  public in_cart : boolean;
  public cart_length;
  public total;

  constructor( public CartService: CartService, public LoginService: Service1Service, public Router:Router, public el : ElementRef ) { }


  async ngOnInit() {
    if(this.LoginService.login == false ){
      this.LoginService.go_home()
    }else{
      let response = await this.CartService.get_cart_request()
      response.subscribe(async (resp)=>{
        resp['status'] == 'ok' ?  this.cart = await resp['cart'] : alert("need to login")
        this.in_cart = resp['in_cart']
        this.cart_length = resp['cart_length']
        this.total = resp['total']
      })
    }
    
  }

  delay(ms: number) { 
    return new Promise( resolve => setTimeout(resolve, ms) ); 
  }

  async removeFromCart(event,item){
    this.poss(event)
    let response = await this.CartService.removeFromCart(item)
    response.subscribe(
      async (response) =>{
        console.log(response)
        response['status'] == 'ok' ? this.total = await response['total'] : alert('Django RemoveCart Error')
      },
      (error)=>{
        alert('Removing Item Failed')
      }
    )
    
  }

  async purchase(){
    let response = await this.CartService.purchase()
    response.subscribe(
      (response) =>{
        response['status'] == 'ok' ? this.Router.navigate(['orders']):  alert('Django Purchase Error')
      },
      (error) => {
        alert('Purchasing Item Failed')
      }  
    )

  }

  poss(event){
    console.log(event.target.parentNode)
    event.target.parentNode.parentNode.remove()
    
  }

}
