import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestbuttonComponent } from './testbutton/testbutton.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClearComponent } from './clear/clear.component';
import { NewItemComponent } from './new-item/new-item.component';
import { CitiesComponent } from './cities/cities.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './users/user/user.component';
import { DetailsComponent } from './users/details/details.component';
import { ListComponent } from './users/list/list.component';
import { ContactReactiveModule } from './contact-reactive/contact-reactive.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerInterceptor } from './shared/spinner/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TestbuttonComponent,
    ClearComponent,
    NewItemComponent,
    CitiesComponent,
    FilterPipe,
    ContactComponent,
    //ContactReactiveComponent, nuevo modulo
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    UserComponent,
    DetailsComponent,
    ListComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ContactReactiveModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
