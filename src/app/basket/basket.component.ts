import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { selectBasket, selectBasketCount, selectBasketTotal, selectProductInBasketById } from '../store/selectors/basket.selectors';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../types';
import * as ProductActions from '../store/actions/app.actions';
@Component({
  selector: 'app-basket',
  imports: [CommonModule, RouterModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
	store = inject(Store<AppState>);
	products$ = this.store.select(selectBasket);
	// total$ = this.store.select(selectBasketTotal);
	// count$ = this.store.select(selectBasketCount);
	// productInBasket$ = this.store.select(selectProductInBasketById(1));

	loadProduct(productId: number) {
		this.store.dispatch(ProductActions.loadProductById({ productId }));
	}

	removeFromBasket(product: Product) {
		this.store.dispatch(ProductActions.removeFromBasket({ product }));
	}
}
