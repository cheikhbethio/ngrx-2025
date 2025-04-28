import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, AuthState } from "../reducers";

export const selectAuthFeatureState = createFeatureSelector<AppState, AuthState>('authState');

export const selectAuthState = createSelector(
	selectAuthFeatureState,
	(state: AuthState) => state
);

export const selectIsAuthenticated = createSelector(
	selectAuthState,
	(state: AuthState) => state.isAuthenticated
);

export const selectUserCredentials = createSelector(
	selectAuthState,
	(state: AuthState) => state.user
);
	