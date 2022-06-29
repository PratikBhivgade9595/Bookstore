import { NgModule, Query } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import { LoginComponent } from './component/login/login.component';
import { OrderPlaceComponent } from './component/order-place/order-place.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { AuthenticationGuard } from './authentication.guard';
import { QuickViewComponent } from './component/quick-view/quick-view.component';
import { AdminService } from './service/adminService/admin.service';
import { AdminPageComponent } from './component/admin-page/admin-page.component';

const routes: Routes = [
  
  {path:'', redirectTo: '/login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'signin', component: SignUpComponent},
  {path:'dashboard', component: DashboardComponent,canActivate: [AuthenticationGuard],
    children: [
      {path:'dashboard', redirectTo: '/dashboard/getallbook', pathMatch: 'full'},
      {path:'getallbook', component: GetallbookComponent},
      {path:'cart', component: CartComponent},
      {path:'order', component: OrderPlaceComponent},
      {path:'wishlist', component: WishlistComponent},
      {path:'view', component: QuickViewComponent},
      {path:'admin', component: AdminPageComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
