import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Importing font awesome icons
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faTachometerAlt as fasTachometerAlt, faCarrot as fasCarrot, faReceipt as fasReceipt, faTruck as fasTruck} from "@fortawesome/free-solid-svg-icons";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";


import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { SupplierComponent } from './admin/supplier/supplier.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from './services/crud.service';
import { CreateUserComponent } from './admin/forms/create-user/create-user.component';
import { CreateSupplierComponent } from './admin/users/create-supplier/create-supplier.component';
import { SuccessComponent } from './admin/forms/success/success.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminNavigationComponent } from './admin/admin-navigation/admin-navigation.component';
import { ViewApplicationComponent } from './admin/dashboard/view-application/view-application.component';
import { EditProductComponent } from './admin/products/edit-product/edit-product.component';
import { CreateProductComponent } from './admin/products/create-product/create-product.component';
import { CreatePromotionsComponent } from './admin/forms/create-promotions/create-promotions.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './admin/users/users.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { environment } from 'src/environments/environment';
import { OrdersComponent } from './admin/orders/orders.component';
import { PaymentsComponent } from './admin/payments/payments.component';
import { PromotionsComponent } from './admin/promotions/promotions.component';
import { EditOrderComponent } from './admin/orders/edit-order/edit-order.component';
import { CreatePromoComponent } from './admin/promotions/create-promo/create-promo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    SupplierComponent,
    CreateSupplierComponent,
    CreateProductComponent,
    CreateUserComponent,
    SuccessComponent,
    NavigationComponent,
    AdminNavigationComponent,
    ViewApplicationComponent,
    EditProductComponent,
    CreatePromotionsComponent,
    LoginComponent,
    UsersComponent,
    OrdersComponent,
    PaymentsComponent,
    PromotionsComponent,
    EditOrderComponent,
    CreatePromoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(fasTachometerAlt, fasCarrot,
       fasReceipt, fasTruck);
  }
 }
