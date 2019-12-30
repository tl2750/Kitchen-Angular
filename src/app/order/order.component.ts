import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../service/orders.service';
import { Service1Service} from '../service/service1.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public orders;

  constructor(public OrdersService: OrdersService, public LoginService: Service1Service, private router: Router) { }

  async ngOnInit() {
    if(this.LoginService.login == false ){
      this.LoginService.go_home()
    }else{
      let response= await  this.OrdersService.get_orders()
      response.subscribe(async (response)=>{
        console.log(response['orders'])
        this.orders = await response['orders']
      })
    }
  }

  goDetail(id:number){
    console.log("I am in goDetail")
    this.router.navigate(['/orderdetail/'+id]);
  }


}


