import { Component, AfterViewInit, ViewChild, OnInit, Inject, inject, OnDestroy } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductHostDirective } from '../product-host.directive';
import { ProductsService } from '../products/products.service';
import { toSignal } from '@angular/core/rxjs-interop';

import { Observable, Subscription } from 'rxjs';
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-product-list',
    imports: [ProductHostDirective, RouterLink
],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    standalone: true,

})


export class ProductListComponent implements AfterViewInit{
  products = toSignal(inject(ProductsService).getProducts(), {
    initialValue: [],
  });
  selectedProduct: Product | undefined;



  // ngOnInit(): void {
  //   this.getProducts();
  // }


  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  currentStyles = {
    'font-style': 'italic',
    'font-weight': 'bold'
  };

  ngAfterViewInit(): void {
    console.log(this.productDetail?.product);
  }

  onAdded(product: Product) {
    alert(`${product.title} added to cart!`);
  }

  // private getProducts() {
  //   this.products$ = this.productsService.getProducts();
  // }

}
