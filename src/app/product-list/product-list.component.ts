import { Component, AfterViewInit, ViewChild, OnInit, Inject, inject, OnDestroy } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductHostDirective } from '../product-host.directive';
import { ProductsService } from '../products/products.service';
import { FavoritesComponent } from '../favorites/favorites.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-product-list',
    imports: [ProductDetailComponent, ProductHostDirective, 
    FavoritesComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    standalone: true,
    providers: [
      { provide:ProductsService, useClass: ProductsService }]
})


export class ProductListComponent implements AfterViewInit, OnInit, OnDestroy {
  products$ = inject(ProductsService).getProducts();
  selectedProduct: Product | undefined;
  products: Product[] = [];
  private productsSub: Subscription | undefined;

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
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
    this.productsSub = this.products$.subscribe(products => {
      this.products = products;
  });
  }

}
