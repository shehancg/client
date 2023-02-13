import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';
import { FooterComponent } from './footer/footer.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Portfolio1Component } from './portfolio1/portfolio1.component';
import { ShopComponent } from './shop/shop.component';
import { IteminsideComponent } from './iteminside/iteminside.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ThanksComponent } from './thanks/thanks.component';
import { AdminComponent } from './admin/admin.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { AdminitemsComponent } from './adminitems/adminitems.component';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdditemComponent } from './additem/additem/additem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    Home4Component,
    FooterComponent,
    About1Component,
    About2Component,
    PortfolioComponent,
    Portfolio1Component,
    ShopComponent,
    IteminsideComponent,
    LoginComponent,
    CartComponent,
    ThanksComponent,
    AdminComponent,
    AdminusersComponent,
    AdminordersComponent,
    AdminitemsComponent,
    ChatComponent,
    AdditemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:5000,
      positionClass:'toast-top-center',
      newestOnTop:false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
