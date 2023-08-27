import {configureStore} from '@reduxjs/toolkit';

import {scoreReducer} from '@feature/score/scoreSlice';
import {toastReducer} from '@feature/toast/toastSlice';
import {typingReducer} from '@feature/typing/typingSlice';
import {userReducer} from '@feature/user/userSlice';

import * as api from '@api/api';

const store = configureStore({
	reducer: {
		typing: typingReducer,
		score: scoreReducer,
		user: userReducer,
		toast: toastReducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {api},
			},
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type typeApi = typeof api;

export default store;
