import { ProductsState } from "./reducers.type";
import {  createReducer, on } from '@ngrx/store';
import * as AppActions from '../actions/app.actions'; // Use alias for clarity
import { produce } from 'immer';

export const initialProductsState: ProductsState = {
	products: [
		{ id: 1, name: 'Product 1', price: 100},
		{ id: 2, name: 'Product 2', price: 200},
		{ id: 3, name: 'Product 3', price: 300},
	],
};

// Reducer for the products slice
export const productsReducer = createReducer(
	initialProductsState,
	on(AppActions.loadProducts, (state) => state),
		on(AppActions.addProduct, (state, { product }) => produce(state, (draft) => {
			draft.products.push(product);
		})),
	on(AppActions.removeProduct, (state, { productId }) => produce(state, (draft) => {
		draft.products = draft.products.filter((p) => p.id !== productId);
	})),
	
	on(AppActions.updateProduct, (state, {product}) => produce(state, (draft) => {
		const index = draft.products.findIndex((p) => p.id === product.id);
		if (index !== -1) {
			draft.products[index] = product;
		}
	})),
);