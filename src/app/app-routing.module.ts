import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { TheaterAddComponent } from './components/theater-add/theater-add.component';
import { AboutComponent } from './components/about/about.component';
import { MovieDetailedComponent } from './components/movie-detailed/movie-detailed.component';
import { EditComponent } from './components/edit/edit.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SuccessfulComponent } from './components/successful/successful.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';

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
},{
  path:'about',
  component:AboutComponent
},{
  path:'movieDetails/:id',
  component:MovieDetailedComponent
},{
  path:'edit/:id',
  component:EditComponent
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
