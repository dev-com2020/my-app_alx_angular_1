import {Routes} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {CartComponent} from "./cart/cart.component";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {productsResolver} from "./products/products.resolver";
import {authGuard} from "./auth.guard";

export const routes: Routes = [
  {path: 'products', component: ProductListComponent,
    resolve: {
      products: productsResolver
    }
  },
  {path: 'products/new', component: ProductCreateComponent},
  {path: 'products/:id', component: ProductDetailComponent},

  {path: 'cart', component: CartComponent, canActivate: [authGuard]},
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: '**', redirectTo: 'products'},
];
