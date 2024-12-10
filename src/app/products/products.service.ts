import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

export class ProductsService {

  constructor() { }

  private products: Product[] = [
    { id: 1, title: 'Screwdriver', price: 4.99, categories: { 1: 'tools', 2: 'home-improvement' } },
    { id: 2, title: 'Hammer', price: 3.99, categories: { 1: 'tools', 2: 'home-improvement' } },
    { id: 3, title: 'Drill', price: 42.99, categories: { 1: 'electric-tools', 2: 'home-improvement' } },
    { id: 4, title: 'Saw', price: 14.99, categories: { 1: 'TOOLS', 2: 'home-improvement' } }
  ]

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
