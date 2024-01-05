import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuCoffeeComponent } from './components/menu-coffee/menu-coffee.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormOrderCoffeeComponent } from './components/form-order-coffee/form-order-coffee.component';



const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'menu-coffee', component: MenuCoffeeComponent },
  { path: 'form-order-coffee', component: FormOrderCoffeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
