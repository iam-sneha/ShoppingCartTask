import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'App', pathMatch: 'full' },
  { path: 'App', component: AppComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
