import {createSlice} from '@reduxjs/toolkit';

import {IInitialState, typeActionOpenToast} from './types/typesSlice';

export const initialState: IInitialState = {
	message: null,
	type: 'info',
};

const toastSlice = createSlice({
	name: '@@toasts',
	initialState,
	reducers: {
		openToast: (state, {payload}: typeActionOpenToast) => {
			state.message = payload.message;
			state.type = payload.type || 'info';
		},
		closeToast: () => initialState,
	},
});

export const toastActions = toastSlice.actions;

export const toastReducer = toastSlice.reducer;
