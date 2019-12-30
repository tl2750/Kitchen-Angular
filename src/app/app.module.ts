import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { RouteParamComponent } from './route-param/route-param.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { CustomDirective } from './custom.directive';
import { LoginComponent } from './login/login.component';
import { Pipe1Pipe } from './pipe1.pipe';
// import { FormBuilder, FormGroup } from '@angular/forms';
import { Service1Service } from './service/service1.service';
import { CartService } from './service/cart.service'
import { KitchenService } from './service/kitchen.service'
import { MenuService } from './service/menu.service'

//Component
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { AddKitchenComponent } from './add-kitchen/add-kitchen.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProviderKitchenComponent } from './provider-kitchen/provider-kitchen.component';
import { MenuComponent } from './menu/menu.component';

// import { CookieService } from 'ngx-cookie-service'

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component,
    RouteParamComponent,
    CustomDirective,
    LoginComponent,
    Pipe1Pipe,
    CartComponent,
    OrderComponent,
    OrderdetailComponent,
    AddDishComponent,
    AddKitchenComponent,
    SignUpComponent,
    ProviderKitchenComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [Service1Service,CartService, KitchenService, MenuService],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
