import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  {
  path: '',
  component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
