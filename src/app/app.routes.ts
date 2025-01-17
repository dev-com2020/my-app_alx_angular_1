import {Routes} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {CartComponent} from "./cart/cart.component";
import {ProductCreateComponent} from "./product-create/product-create.component";

export const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'products/new', component: ProductCreateComponent},
  // {path: '**', redirectTo: 'products'}
];
