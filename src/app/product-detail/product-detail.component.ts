import { Component, Input, EventEmitter, 
  Output, ViewEncapsulation, OnInit,
  OnDestroy,OnChanges,SimpleChanges} from '@angular/core';
import { Product } from '../product';

@Component({
    selector: 'app-product-detail',
    imports: [],
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
    standalone: true,
    encapsulation: ViewEncapsulation.Emulated
})
export class ProductDetailComponent implements OnInit, OnChanges {

  constructor() { 
    console.log('Product w constructor', this.product);
  }

  ngOnInit(): void {
    console.log('Product w ngOnInit', this.product);
  }

  ngOnDestroy(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];
    if (!product.isFirstChange()) {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;
      console.log('Product w ngOnChanges old', oldValue);
      console.log('Product w ngOnChanges new', newValue);
    }
  }

  @Input({required:true}) product: Product | undefined
  @Output() added = new EventEmitter<Product>();

  addtoCart(){
    this.added.emit(this.product);
  }
}