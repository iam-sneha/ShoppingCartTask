import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    CommonModule,
  ],
  declarations: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
