import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheaterAddComponent } from './components/Theator/theater-add/theater-add.component';
import { MovieAddComponent } from './components/admin/movie-manage/movie-add/movie-add.component';
import { MenuComponent } from './components/menu/menu.component';
import { MovieCardComponent } from './components/Movie/movie-card/movie-card.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TableShowComponent } from './components/Movie/table-show/table-show.component';
import { MovieDetailedComponent } from './components/Movie/movie-detailed/movie-detailed.component';

import { MovieEditComponent } from './components/admin/movie-manage/movie-edit/movie-edit.component';
import { PurchaseComponent } from './components/Cart/purchase/purchase.component';
import { PaymentComponent } from './components/Cart/payment/payment.component';
import { SuccessfulComponent } from './components/Cart/successful/successful.component';
import { SignUpComponent } from './components/Auth/sign-up/sign-up.component';
import { LogInComponent } from './components/Auth/log-in/log-in.component';
import { MovieShowsInterceptor } from './movie-shows.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './components/loader/loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CarousalComponent } from './components/carousal/carousal.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserManageComponent } from './components/Admin/user-manage/user-manage.component';
import { MovieManageComponent } from './components/Admin/movie-manage/movie-manage.component';
import { TheaterManageComponent } from './components/Admin/theater-manage/theater-manage.component';
import { ReportsComponent } from './components/Admin/reports/reports.component';


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
    MovieEditComponent,
    PurchaseComponent,
    PaymentComponent,
    SuccessfulComponent,
    SignUpComponent,
    LogInComponent,
    LoaderComponent,
    CarousalComponent,
    AdminComponent,
    UserManageComponent,
    MovieManageComponent,
    TheaterManageComponent,
    ReportsComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule

  ],
  providers: [


    {
      provide:HTTP_INTERCEPTORS,
      useClass:MovieShowsInterceptor,
      multi:true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
