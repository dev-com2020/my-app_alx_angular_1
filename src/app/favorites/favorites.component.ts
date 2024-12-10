import { Component, Host, OnInit, Optional } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products/products.service';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../favorites.service';
import { favoritesFactory } from '../favorites';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
  standalone: true,
  providers: [{ provide: ProductsService, useFactory: favoritesFactory(true) }]
})
export class FavoritesComponent implements OnInit {
  products: Product[] = [];
  constructor(@Host() private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

}
