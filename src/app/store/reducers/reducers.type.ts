import { Product } from "../../types";

export interface ProductsState {
	products: Product[];
}

export interface BasketState {
	basket: Product[];
}

export interface AppState {
	productsState: ProductsState; 
	basketState: BasketState;     
}
