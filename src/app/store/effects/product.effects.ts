import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as ProductActions from '../actions/app.actions';

export const addToBasketThenRemoveEffect = createEffect(
  (actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(ProductActions.addToBasket),
      map(({ product }) => ProductActions.removeProduct({ productId: product.id }))
    ),
  { functional: true }
); 

export const removeFromBasketThenAddEffect = createEffect(
  (actions$ = inject(Actions)) =>
    actions$.pipe(
      ofType(ProductActions.removeFromBasket),
      map(({ product }) => ProductActions.addProduct({ product }))
    ),
  { functional: true }
); 