import { ActionReducer, UPDATE } from "@ngrx/store";
import { INIT } from "@ngrx/store";
import { AppState, localStorageKey } from "./reducers.type";
import { Action } from "@ngrx/store";

export const localstorageCustomReducer = (reducer: ActionReducer<any>): ActionReducer<any> => {
	let isBrowser = typeof localStorage !== 'undefined';

	return (state: AppState, action: Action) => {
		if(isBrowser && (action.type === INIT || action.type === UPDATE)) {
			const storageValue = localStorage.getItem(localStorageKey);
			if(storageValue) {
				try {
          const parsedAuth = JSON.parse(storageValue);
          return {
            ...state,[localStorageKey]: parsedAuth
					};
				} catch (error) {
					console.error('Error parsing local storage value', error);
					localStorage.removeItem(localStorageKey);
				}
			}
		}
		const newState = reducer(state, action);

		if(isBrowser) {
			localStorage.setItem(localStorageKey, JSON.stringify(newState.authState));
		}
		return newState;
	}
}