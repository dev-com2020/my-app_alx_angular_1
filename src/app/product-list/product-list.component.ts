import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
    selector: 'app-product-list',
    imports: [ProductDetailComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    standalone: true
})


export class ProductListComponent implements AfterViewInit {

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  products: Product[] = [
    {id: 1, title: 'Screwdriver'},
    {id: 2, title: 'Hammer'},
    {id: 3, title: 'Drill'},
    {id: 4, title: 'Saw'}
  ];

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
}
