import {configureStore} from '@reduxjs/toolkit';

import * as api from './api/api';
import {typingReducer} from './feature/typing/typingSlice';

export const store = configureStore({
	reducer: {
		typing: typingReducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: api,
			},
		}),
});
