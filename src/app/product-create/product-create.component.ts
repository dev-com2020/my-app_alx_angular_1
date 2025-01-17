import { Component } from '@angular/core';
import {ProductsService} from "../products/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  imports: [],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  constructor(private productService: ProductsService, private router: Router) {}

  createProduct(title: string, price: string, categories: string) {
    this.productService.addProduct({
      title,
      price: Number(price),
      categories
    }).subscribe(() => this.router.navigate(['/products']));
  }

}
