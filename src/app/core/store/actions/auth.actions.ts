import { createActionGroup, emptyProps } from "@ngrx/store";
import { props } from "@ngrx/store";
import { UserAuth } from "../../types";


export const AuthActions = createActionGroup({
	source: 'Auth',
	events: {
		login: props<{ user: UserAuth | null }>(),
		logout: emptyProps,
	},
});