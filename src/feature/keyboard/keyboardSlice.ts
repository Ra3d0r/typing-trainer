import {createSlice} from '@reduxjs/toolkit';

import {IInitialState} from './types/typesSlice';

const initialState: IInitialState = {
	enable: true,
};

const keyboardSlice = createSlice({
	name: '@@keyboard',
	initialState,
	reducers: {
		toggleEnable: (state) => ({
			...state,
			enable: !state.enable,
		}),
	},
});

export const keyboardActions = keyboardSlice.actions;

export const keyboardReducer = keyboardSlice.reducer;
