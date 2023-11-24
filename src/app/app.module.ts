import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheaterAddComponent } from './components/theater-add/theater-add.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { MenuComponent } from './components/menu/menu.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TableShowComponent } from './components/table-show/table-show.component';
import { MovieDetailedComponent } from './components/movie-detailed/movie-detailed.component';
import { EditComponent } from './components/edit/edit.component';
import { MovieEditComponent } from './components/edit/movie-edit/movie-edit.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SuccessfulComponent } from './components/successful/successful.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MovieShowsInterceptor } from './movie-shows.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TheaterAddComponent,
    MovieAddComponent,
    MenuComponent,
    MovieCardComponent,
    HomeComponent,
    AboutComponent,
    TableShowComponent,
    MovieDetailedComponent,
    EditComponent,
    MovieEditComponent,
    PurchaseComponent,
    PaymentComponent,
    SuccessfulComponent,
    SignUpComponent,
    LogInComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,useClass:MovieShowsInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
