import { Component, AfterViewInit, ViewChild, OnInit, Inject, inject, OnDestroy } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import {Observable, of, switchMap} from 'rxjs';
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
    selector: 'app-product-list',
    imports: [RouterLink
],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    standalone: true,
})


export class ProductListComponent implements OnInit{
  products$: Observable<Product[]> | undefined;

  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.getProducts();
  }


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

  private getProducts() {
    this.products$ = this.route.data.pipe(
      switchMap(data => of(data['products']))
      );
  }

}
