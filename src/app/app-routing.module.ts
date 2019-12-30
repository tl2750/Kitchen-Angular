import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//My own import 
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { RouteParamComponent} from './route-param/route-param.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { ProviderKitchenComponent } from './provider-kitchen/provider-kitchen.component';
import { AddKitchenComponent } from './add-kitchen/add-kitchen.component';
import { MenuComponent } from './menu/menu.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: Route1Component},
  { path: 'login', component: Route1Component},
  { path: 'shoppingCart', component: CartComponent},
  { path: 'orders', component: OrderComponent},
  { path: 'orderdetail/:id', component: OrderdetailComponent},
  { path: 'myKitchen', component: ProviderKitchenComponent},
  { path: 'addKitchen', component:  AddKitchenComponent},
  { path: 'view/menu/kitchen/:id', component: MenuComponent},//buyer
  { path: 'menu/kitchen/:id', component: AddDishComponent}, //provider
  { path: 'signup', component: SignUpComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


// ng add @angular/material