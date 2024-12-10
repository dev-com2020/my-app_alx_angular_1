import { Component, AfterViewInit, ViewChild, OnInit, Inject, inject } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductHostDirective } from '../product-host.directive';
import { ProductsService } from '../products.service';
import { FavoritesComponent } from '../favorites/favorites.component';

@Component({
    selector: 'app-product-list',
    imports: [ProductDetailComponent, ProductHostDirective, FavoritesComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    standalone: true,
    providers: [ProductsService]
})


export class ProductListComponent implements AfterViewInit {
  products = inject(ProductsService).getProducts();
  selectedProduct: Product | undefined;


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
  // onAdded() {
  //   alert(`${this.selectedProduct?.title} added to cart!`);
  // }
}
