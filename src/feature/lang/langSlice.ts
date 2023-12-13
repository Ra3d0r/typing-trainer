import {createSlice} from '@reduxjs/toolkit';

import {IInitialState, typeSetLang} from './types/typesSlice';

export const initialState: IInitialState = {
	lang: 'en',
};

const langSlice = createSlice({
	name: '@@lang',
	initialState,
	reducers: {
		setLang: (state, {payload}: typeSetLang) => {
			state.lang = payload.lang;
		},
	},
});

export const langActions = langSlice.actions;

export const langReducer = langSlice.reducer;
