import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { BasketActions } from '../actions/basket.actions';
import { ProductActions } from '../actions/product.actions';

export const addToBasketThenRemoveEffect = createEffect(
  (actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(BasketActions.addToBasket),
      map(({ product }) => ProductActions.removeProduct({ productId: product.id }))
    ),
  { functional: true }
); 

export const removeFromBasketThenAddEffect = createEffect(
  (actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(BasketActions.removeFromBasket),
      map(({ product }) => ProductActions.addProduct({ product })) 
    ),
  { functional: true }
); 