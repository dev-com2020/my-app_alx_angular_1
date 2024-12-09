import { Component, Input, EventEmitter, Output} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input({required:true}) product: Product | undefined
  @Output() added = new EventEmitter<Product>();

  addtoCart(){
    this.added.emit(this.product);
  }
}