import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {CarouselModule} from 'primeng/carousel';
import {ProductModule} from './products/product.module';

import { AppComponent } from './app.component';
import { HomeComponent} from './home/home.component';
import { ContactComponent} from './contact/contact.component';
import { AboutComponent} from './about/about.component';
import { ProductsComponent} from './products/product.component';

const appRoutes = [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: 'products', component: ProductsComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ProductModule,
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyBcavKZLEExZIhfrLz1nbk4jJJveopiZ8o'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
