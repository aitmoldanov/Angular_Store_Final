import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookingComponent} from './booking/booking.component';
import {LayoutComponent} from './layout/layout.component';
import {MainPageComponent} from './main-page/main-page.component';
import {BookingTicketComponent} from './booking-ticket/booking-ticket.component';
import {TourlistComponent} from './tourlist/tourlist.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    path: '',
  component: MainPageComponent
  },
  {
    path: 'app-layout',
    component: LayoutComponent
  },
  { path: 'app-booking',
    component: BookingComponent
  },
  { path: 'app-booking-ticket',
    component: BookingTicketComponent
  },
  {
    path: 'app-tourlist',
    component: TourlistComponent
  },
  {
    path: 'app-register',
    component: RegisterComponent
  },
  {
    path: 'app-login',
    component: LoginComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
