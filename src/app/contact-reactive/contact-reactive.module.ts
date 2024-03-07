import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactReactiveRoutingModule } from './contact-reactive-routing.module';
import { ContactReactiveComponent } from './contact-reactive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [ContactReactiveComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ContactReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactReactiveModule { }
