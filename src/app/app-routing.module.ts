import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About1Component } from './about1/about1.component';
import { AdminComponent } from './admin/admin.component';
import { AdminitemsComponent } from './adminitems/adminitems.component';
import { AdminordersComponent } from './adminorders/adminorders.component';
import { AdminusersComponent } from './adminusers/adminusers.component';
import { CartComponent } from './cart/cart.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { Home4Component } from './home4/home4.component';
import { IteminsideComponent } from './iteminside/iteminside.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Portfolio1Component } from './portfolio1/portfolio1.component';
import { ShopComponent } from './shop/shop.component';
import { ThanksComponent } from './thanks/thanks.component';
import { AdditemComponent } from './additem/additem/additem.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home1',component:Home1Component},
  {path:'home2',component:Home2Component},
  {path:'home3',component:Home3Component},
  {path:'home4',component:Home4Component},
  {path:'about1',component:About1Component},
  {path:'portfolio',component:PortfolioComponent},
  {path:'portfolio1',component:Portfolio1Component},
  {path:'shop',component:ShopComponent},
  {path:'iteminside',component:IteminsideComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent},
  {path:'thanks',component:ThanksComponent},
  {path:'admin',component:AdminComponent},
  {path:'adminusers',component:AdminusersComponent},
  {path:'adminorders',component:AdminordersComponent},
  {path:'adminitems',component:AdminitemsComponent},
  {path:'chat',component:ChatComponent},
  {path:'additem',component:AdditemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
