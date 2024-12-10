import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
    selector: 'app-product-list',
    imports: [ProductDetailComponent],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    standalone: true
})
export class ProductListComponent {
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

  onAdded(product: Product) {
    alert(`${product.title} added to cart!`);
  }
}
