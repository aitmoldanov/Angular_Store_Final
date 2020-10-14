import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-header/header.component';
import { CheckboxesComponent } from './app-checkboxes/checkboxes.component';
import { AppInputComponent } from './app-input/app-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { BookingComponent } from './booking/booking.component';
import { BookingTicketComponent } from './booking-ticket/booking-ticket.component';
import { TourlistComponent } from './tourlist/tourlist.component';
import { MyTitlePipe } from './my-title.pipe';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CheckboxesComponent,
    AppInputComponent,
    LayoutComponent,
    CheckboxesComponent,
    MainPageComponent,
    FooterComponent,
    BookingComponent,
    BookingTicketComponent,
    TourlistComponent,
    MyTitlePipe,
    LoginComponent,
    RegisterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
