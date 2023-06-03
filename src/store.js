import {configureStore} from '@reduxjs/toolkit';

import * as api from './api/api';
import {keyboardReducer} from './feature/keyboard/keyboardSlice';
import {scoreReducer} from './feature/score/scoreSlice';
import {typingReducer} from './feature/typing/typingSlice';

const store = configureStore({
	reducer: {
		typing: typingReducer,
		keyboard: keyboardReducer,
		score: scoreReducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {api},
			},
		}),
});

export default store;
