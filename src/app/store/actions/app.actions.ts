
import { createAction, props } from '@ngrx/store';
import { Product } from '../../types';

export const loadProducts = createAction('[App] Load Products');
export const loadProductById = createAction('[App] Load Products By Id', props<{ productId: number }>());
export const addProduct = createAction('[App] Add Product', props<{ product: Product }>());
export const removeProduct = createAction('[App] Remove Product', props<{ productId: number }>());
export const updateProduct = createAction('[App] Update Product', props<{ product: Product }>());

// Basket actions
export const addToBasket = createAction('[App] Add To Basket', props<{ product: Product }>());
export const removeFromBasket = createAction('[App] Remove From Basket', props<{ product: Product }>());



