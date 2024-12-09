import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
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
}
