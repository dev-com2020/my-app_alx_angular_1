import { inject, Injectable } from '@angular/core';
import { Product } from '../product';
import {Observable, of, map, pipe} from 'rxjs';
import { APP_SETTINGS } from '../app.settings';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private products: Product[] = [];
  private productsUrl = inject(APP_SETTINGS).apiUrl + '/products';

  constructor(private http: HttpClient) { }

  getProducts(limit?: number): Observable<Product[]> {
    if (this.products.length === 0) {
      const options = new HttpParams().set('limit', limit || 10);
      return this.http.get<Product[]>(this.productsUrl, {
        params: options
      }).pipe(map(products => {
        this.products = products;
        return products;
      }));
    }
    return of(this.products);
  }

  getProduct(id: number): Observable<Product> {
    const product = this.products.find(p => p.id === id);
    return of(product!);
  }

  addProduct(newProduct: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, newProduct).pipe(
      map(product => {
        this.products.push(product);
        return product;
      })
    );
  }
}
