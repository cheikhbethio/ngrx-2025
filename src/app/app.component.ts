import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectBasketCount, selectBasketTotal } from './store/selectors/basket.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'NGRX';
	store = inject(Store);
	total$ = this.store.select(selectBasketTotal);
	count$ = this.store.select(selectBasketCount);

}
