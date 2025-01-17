import { Component, ViewChild, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import {Observable, of, switchMap} from 'rxjs';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AsyncPipe} from "@angular/common";

@Component({
    selector: 'app-product-list',
    imports: [RouterLink, AsyncPipe
],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css',
    standalone: true,
})


export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.products$ = this.route.data.pipe(
      switchMap(data => of(data['products']))
    );
  }
}
