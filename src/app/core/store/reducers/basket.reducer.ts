import {  createReducer, on } from '@ngrx/store';
import { BasketState } from './reducers.type';
import { BasketActions } from '../actions/basket.actions'; // Updated import
import { produce } from 'immer';


export const initialBasketState: BasketState  = {
	basket: [],
};


// Reducer for the basket slice
export const basketReducer = createReducer(
	initialBasketState,
	on(BasketActions.addToBasket, (state, { product }) => produce(state, (draft) => {
			draft.basket.push(product);
	})),
	// Updated to use productId based on the action definition
	on(BasketActions.removeFromBasket, (state, { product }) => produce(state, (draft) => {
		draft.basket = draft.basket.filter((p) => p.id !== product.id);
	}))
);

