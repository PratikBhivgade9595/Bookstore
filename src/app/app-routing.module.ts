import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import { LoginComponent } from './component/login/login.component';
import { OrderPlaceComponent } from './component/order-place/order-place.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  {path:'', redirectTo: '/login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'signin', component: SignUpComponent},
  {path:'dashboard', component: DashboardComponent,canActivate: [AuthenticationGuard],
    children: [
      {path:'', redirectTo: 'getallbook' , pathMatch: 'full'},
      {path:'getallbook', component: GetallbookComponent},
      {path:'cart', component: CartComponent},
      {path:'order', component: OrderPlaceComponent},
      {path:'wishlist', component: WishlistComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
