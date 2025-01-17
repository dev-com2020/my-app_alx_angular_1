import { Component } from '@angular/core';
import {ProductsService} from "../products/products.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {priceMaximumValidator} from "../price-maximum.validator";

@Component({
  selector: 'app-product-create',
  imports: [ReactiveFormsModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {

  productForm = new FormGroup({
    title: new FormControl('', {nonNullable:true}),
    price: new FormControl<number | undefined>(undefined, {nonNullable:true, validators: [priceMaximumValidator(1000)]}),
    categories: new FormControl('', {nonNullable:true}),
    extra: new FormGroup({
      image: new FormControl(''),
      description: new FormControl('')
    })
  })


  constructor(private productService: ProductsService, private router: Router) {}

  createProduct() {
    this.productService.addProduct(this.productForm.value).subscribe(() => this.router.navigate(['/products']));
  }

}
