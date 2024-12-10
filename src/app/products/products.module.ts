import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';
import { OrdersModule } from '../orders/orders.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrdersModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
