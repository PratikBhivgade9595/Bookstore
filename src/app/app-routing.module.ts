import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'signin', component: SignUpComponent},
  {path:'dashboard', component: DashboardComponent,
    children: [
      {path:'', redirectTo: 'getallbook' , pathMatch: 'full'},
      {path:'getallbook', component: GetallbookComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
