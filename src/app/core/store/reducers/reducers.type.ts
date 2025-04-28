import { Product, UserAuth } from "../../types";

export interface ProductsState {
	products: Product[];
}

export interface BasketState {
	basket: Product[];
}

export interface AuthState {
	user: UserAuth | null;
	isAuthenticated: boolean;
}

export interface AppState {
	productsState: ProductsState; 
	basketState: BasketState;
	authState: AuthState;
}
export const localStorageKey = 'authState';