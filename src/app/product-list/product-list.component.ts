import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductHostDirective } from '../product-host.directive';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-product-list',
    imports: [ProductDetailComponent, ProductHostDirective],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    standalone: true
})


export class ProductListComponent implements AfterViewInit, OnInit {

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  products: Product[] = [];

  selectedProduct: Product | undefined;
  
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
