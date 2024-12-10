import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { CopyrightDirective } from './copyright.directive';
import { ProductsModule } from './products/products.module';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ProductListComponent, CopyrightDirective, ProductsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true
})
export class AppComponent {
  title2 = 'moja aplikacja';
}
