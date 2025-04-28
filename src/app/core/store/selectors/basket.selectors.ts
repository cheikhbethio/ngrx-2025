import { BasketState } from "../reducers";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "../../types";	

export const selectBasketFeatureState = createFeatureSelector<BasketState>('basketState');

export const selectBasket = createSelector(
	selectBasketFeatureState,
	(state: BasketState) => state.basket
);

export const selectBasketTotal = createSelector(
	selectBasket,
	(basket: Product[]) => basket.reduce((total, product) => total + product.price, 0)
);

export const selectBasketCount = createSelector(
	selectBasket,
	(basket: Product[]) => basket.length
);

export const selectProductInBasketById = (productId: number) => createSelector(
	selectBasket,
	(basket: Product[]) => basket.find((product) => product.id === productId)
);


