import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// RUTAS
import { RouterModule } from '@angular/router';
import { APP_ROUTING } from './app.routes';

// SERVICIOS
import { SessionService } from './services/session.service';
import { ProductsService } from './services/products.service';
import { CartListService } from './services/cart-list.service';


// COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { SearchComponent } from './components/search/search.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProductComponent,
    SearchComponent,
    SignupComponent,
    CreateProductComponent,
    FooterComponent,
    CartListComponent,
    ContactComponent,
    CartpageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
    // RouterModule.forRoot(Routes)
  ],
  providers: [
    SessionService,
    ProductsService,
    CartListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
