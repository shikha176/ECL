import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductsComponent} from './product.component';

const productRoutes = [
  ];


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    RouterModule.forChild(productRoutes),
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class ProductModule { }
