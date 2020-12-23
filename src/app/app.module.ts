import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { ProductCrudComponent } from './product/product-crud/product-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {AppInputComponent} from './Checklist/app-input/app-input.component';
import {CheckboxesComponent} from './Checklist/app-checkboxes/checkboxes.component';
import {LayoutComponent} from './Checklist/layout/layout.component';
import {MyTitlePipe} from './my-title.pipe';
import { Ng2SearchPipeModule} from 'ng2-search-filter';
import {DataService} from "./shared/services/data.service";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCrudComponent,
    UserProfileComponent,
    ContactUsComponent,
    AppInputComponent,
    CheckboxesComponent,
    LayoutComponent,
      MyTitlePipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    CustomerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,

        useFactory: HttpLoaderFactory,

        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule,
    MyTitlePipe
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
