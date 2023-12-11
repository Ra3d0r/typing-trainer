import {configureStore} from '@reduxjs/toolkit';

import {langReducer} from '@feature/lang/langSlice';
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
		lang: langReducer,
	},
	devTools: process.env['NODE_ENV'] === 'production' ? false : true,
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
