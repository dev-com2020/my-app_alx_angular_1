import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
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
}
