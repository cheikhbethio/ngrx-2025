import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../core/store/reducers';
import { selectBasket} from '../core/store/selectors/basket.selectors';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../core/types';
import { BasketActions } from '../core/store/actions';
@Component({
  selector: 'app-basket',
  imports: [CommonModule, RouterModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
	store = inject(Store<AppState>);
	products$ = this.store.select(selectBasket);


	removeFromBasket(product: Product) {
		this.store.dispatch(BasketActions.removeFromBasket({ product }));
	}
}
