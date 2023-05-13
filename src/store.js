import {configureStore} from '@reduxjs/toolkit';

import * as api from './api/api';
import {keyboardReducer} from './feature/keyboard/keyboardSlice';
import {typingReducer} from './feature/typing/typingSlice';

export const store = configureStore({
	reducer: {
		typing: typingReducer,
		keyboard: keyboardReducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: api,
			},
		}),
});
