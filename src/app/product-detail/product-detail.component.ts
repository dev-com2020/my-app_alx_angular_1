import {
  Component, Input, EventEmitter,
  Output, ViewEncapsulation, OnInit,
  OnDestroy, OnChanges, SimpleChanges, input
} from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { CurrencyPlnPipe } from '../currency-pln.pipe';
import {ProductsService} from "../products/products.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";
import {FormsModule} from "@angular/forms";


@Component({
    selector: 'app-product-detail',
    imports: [CommonModule, CurrencyPlnPipe, FormsModule],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
    standalone: true,
    encapsulation: ViewEncapsulation.Emulated
})
export class ProductDetailComponent implements OnInit{
  id = input<number>();
  product$: Observable<Product> | undefined;
  price: number | undefined;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.productService.getProduct(Number(params.get('id')));
      })
    )
  }

  changePrice(product: Product) {
    this.productService.updateProduct(
      product.id,
      this.price!
    ).subscribe(() => this.router.navigate(['/products']));

  }
}
