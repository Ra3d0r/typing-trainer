import {configureStore} from '@reduxjs/toolkit';

import {initialState as initialStateLang, langReducer} from '@feature/lang/langSlice';
import {initialState as initialStateScore, scoreReducer} from '@feature/score/scoreSlice';
import {initialState as initialStateToast, toastReducer} from '@feature/toast/toastSlice';
import {initialState as initialStateTyping, typingReducer} from '@feature/typing/typingSlice';
import {initialState as initialStateUser, userReducer} from '@feature/user/userSlice';

const reducer = {
	typing: typingReducer,
	score: scoreReducer,
	user: userReducer,
	toast: toastReducer,
	lang: langReducer,
};

const initialState = {
	typing: initialStateTyping,
	score: initialStateScore,
	user: initialStateUser,
	toast: initialStateToast,
	lang: initialStateLang,
};

export type typeInitialState = typeof initialState;

export const createReduxStore = (preloadedState?: typeInitialState) => {
	return configureStore({
		reducer,
		preloadedState: preloadedState || initialState,
	});
};
