import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePgaeComponent } from './home-pgae/home-pgae.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUs1Component } from './contact-us-1/contact-us-1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePgaeComponent,
    AboutUsComponent,
    ContactUs1Component, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
