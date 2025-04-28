import { ActionReducerMap } from '@ngrx/store';
import { productsReducer } from './product.reducer';
import { basketReducer } from './basket.reducer';
import { AppState } from './reducers.type';
import { authReducer as authReducer } from './auth.reducer';

export * from './product.reducer';
export * from './basket.reducer';
export * from './reducers.type';
export * from './localstorage-custom.reducers';


// Updated ActionReducerMap
export const reducers: ActionReducerMap<AppState> = {
	productsState: productsReducer,
	basketState: basketReducer,
	authState: authReducer,
};
