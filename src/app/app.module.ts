import { NgxSliderModule } from '@angular-slider/ngx-slider'; //Library import
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginRegisterComponent } from './modules/login-register/login-register.component';
import { FilterComponent } from './modules/shop/components/filter/filter.component';
import { ProductComponent } from './modules/shop/components/product/product.component';
import { ShopComponent } from './modules/shop/shop.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AsdfComponent } from './asdf/asdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ShopComponent,
    FilterComponent,
    ProductComponent,
    LoginRegisterComponent,
    AsdfComponent,
  ],
  imports: [
    NgxSliderModule, //Library import
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 5 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
