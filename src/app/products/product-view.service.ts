import { Injectable } from '@angular/core';
import { Observable, switchMap, of, mergeMap } from 'rxjs';
import { Product } from '../product';
import { ProductsService } from './products.service';

@Injectable()
export class ProductViewService {

  constructor(private productService: ProductsService) { }
  private product: Product | undefined;

  getProduct(id: number): Observable<Product | undefined> {
    return this.productService.getProducts().pipe(
      mergeMap(products => {
        if (!this.product) {
          this.product = products.find(product => product.id === id);

        }
        return of(this.product);
      })
    );
  }
}
