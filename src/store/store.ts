import {configureStore} from '@reduxjs/toolkit';

import * as api from '../api/api';
import {keyboardReducer} from '../feature/keyboard/keyboardSlice';
import {scoreReducer} from '../feature/score/scoreSlice';
import {toastReducer} from '../feature/toast/toastSlice';
import {typingReducer} from '../feature/typing/typingSlice';
import {userReducer} from '../feature/user/userSlice';

const store = configureStore({
	reducer: {
		typing: typingReducer,
		keyboard: keyboardReducer,
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

export default store;
