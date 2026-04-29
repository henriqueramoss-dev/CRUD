import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { UsersComponent } from './pages/users/users.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'pedidos', component: OrdersComponent },
  { path: 'usuarios', component: UsersComponent },
  { path: 'adicionar-produto', component: AddProductComponent }
];