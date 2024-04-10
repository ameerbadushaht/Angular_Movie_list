import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieAddComponent } from './components/admin/movie-manage/movie-add/movie-add.component';
import { TheaterAddComponent } from './components/Theator/theater-add/theater-add.component';
import { AboutComponent } from './components/about/about.component';
import { MovieDetailedComponent } from './components/Movie/movie-detailed/movie-detailed.component';

import { PurchaseComponent } from './components/Cart/purchase/purchase.component';
import { PaymentComponent } from './components/Cart/payment/payment.component';
import { SuccessfulComponent } from './components/Cart/successful/successful.component';
import { SignUpComponent } from './components/Auth/sign-up/sign-up.component';
import { LogInComponent } from './components/Auth/log-in/log-in.component';
import { MovieEditComponent } from './components/admin/movie-manage/movie-edit/movie-edit.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent
},{
  path:'addMovie',
  component:MovieAddComponent
},
{
  path:'addTheater',
  component:TheaterAddComponent
},
{
  path:'admin',
  component:AdminComponent
},{
  path:'about',
  component:AboutComponent
},{
  path:'movieDetails/:id',
  component:MovieDetailedComponent
},{
  path:'edit/:id',
  component:MovieEditComponent
},{
  path:'purchase',
  component:PurchaseComponent
},
{
  path:'payment',
  component:PaymentComponent
},{
  path:'succesfull',
  component:SuccessfulComponent
},
{
  path:'signUp',
  component:SignUpComponent
},{
  path:'logIn',
  component:LogInComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
