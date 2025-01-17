import { Component, Inject, inject } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { ProductListComponent } from "./product-list/product-list.component";
import { CopyrightDirective } from './copyright.directive';
import { ProductsModule } from './products/products.module';
import { AppSettings, APP_SETTINGS } from './app.settings';
import { bindCallback, Observable } from 'rxjs';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import {AuthComponent} from "./auth/auth.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CopyrightDirective, ProductsModule,  RouterLink, RouterLinkActive, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  providers: []
})
export class AppComponent {
  title2: string = 'my-app';

  constructor(@Inject(APP_SETTINGS) public settings: AppSettings) {
    this.title$.subscribe(this.setTitle);
    }

  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 3000);
  });

  private setTitle = () => {
    const timestamp = new Date().getTime();
    this.title2 = `${this.settings.title2} (${timestamp})`;
  }

}
