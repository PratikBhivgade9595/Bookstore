import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// <---------->
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AuthguardService } from './service/authguard.service';
import {MatSelectModule} from '@angular/material/select';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';


// <---------->
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import { CartComponent } from './component/cart/cart.component';
import { OrderPlaceComponent } from './component/order-place/order-place.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { FilterPipe } from './pipe/filter.pipe';
import { QuickViewComponent } from './component/quick-view/quick-view.component';
import { AdminPageComponent } from './component/admin-page/admin-page.component';
import { AdminAddComponent } from './component/admin-add/admin-add.component';
import { AdminUpdateComponent } from './component/admin-update/admin-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    GetallbookComponent,
    CartComponent,
    OrderPlaceComponent,
    WishlistComponent,
    FilterPipe,
    QuickViewComponent,
    AdminPageComponent,
    AdminAddComponent,
    AdminUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatRadioModule,
    MatSnackBarModule,
    MatSelectModule,
    NgxPaginationModule,
    MatBadgeModule,
    MatDialogModule,
    
  ],
  providers: [ AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
