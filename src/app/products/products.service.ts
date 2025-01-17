import { inject, Injectable } from '@angular/core';
import { Product } from '../product';
import { Observable, of, map } from 'rxjs';
import { APP_SETTINGS } from '../app.settings';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private products: Product[] = [];
  private productsUrl = inject(APP_SETTINGS).apiUrl + '/products';

  constructor(private http: HttpClient) {
   }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);

  }

  getProduct(id: number): Observable<Product> {
    const product = this.products.find(product => product.id === id);
    return of(product!);
  }

  addProduct(newProduct: Partial<Product>): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, newProduct).pipe(
      map(product => {
        this.products.push(product);
        return product;
      })
    )
  }
}
