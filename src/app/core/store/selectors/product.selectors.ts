import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../../types';
import { AppState, ProductsState } from '../reducers';

export const selectProductsFeatureState = createFeatureSelector<AppState, ProductsState>('productsState');

export const selectAllProducts = createSelector(
  selectProductsFeatureState,
  (state: ProductsState) => state.products 
);


export const selectProductById = (productId: number) => createSelector(
  selectAllProducts,
  (products: Product[]) => products.find(p => p.id === productId)
); 