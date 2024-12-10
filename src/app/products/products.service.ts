import { inject, Inject, Injectable } from '@angular/core';
import { Product } from '../product';
import { Observable, of } from 'rxjs';
import { APP_SETTINGS } from '../app.settings';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private products: Product[] = [];
  private productsUrl = inject(APP_SETTINGS).apiUrl + '/products';
  private http = inject(HttpClient);

  constructor() {
   }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);

  }
}
