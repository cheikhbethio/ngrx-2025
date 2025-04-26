import {  createReducer, on } from '@ngrx/store';
import { BasketState } from './reducers.type';
import * as AppActions from '../actions/app.actions'; // Use alias for clarity
import { produce } from 'immer';


export const initialBasketState: BasketState  = {
	basket: [],
};


// Reducer for the basket slice
export const basketReducer = createReducer(
	initialBasketState,
	on(AppActions.addToBasket, (state, { product }) => produce(state, (draft) => {
			draft.basket.push(product);
		})),
	on(AppActions.removeFromBasket, (state, { product }) => produce(state, (draft) => {
		draft.basket = draft.basket.filter((p) => p.id !== product.id);
	}))
);

