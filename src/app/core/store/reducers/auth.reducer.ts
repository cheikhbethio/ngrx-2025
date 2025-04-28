import { createReducer, on } from "@ngrx/store";
import { produce } from "immer";
import { AppState, AuthState } from "./reducers.type";
import { AuthActions } from "../actions";

export const initialAuthState: AuthState = {
	user: null,
	isAuthenticated: false,
};

export const authReducer = createReducer(
	initialAuthState,
	on(AuthActions.login, (state, { user }) => produce(state, (draft: AuthState) => {
		draft.user = user;
		draft.isAuthenticated = true;
	})),
	on(AuthActions.logout, (state) => produce(state, (draft: AuthState) => {
		draft.user = null;
		draft.isAuthenticated = false;
	}))
);
