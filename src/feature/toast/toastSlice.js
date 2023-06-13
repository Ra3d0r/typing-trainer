import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	message: null,
	type: null, // success info error warning
};

const toastSlice = createSlice({
	name: '@@toasts',
	initialState,
	reducers: {
		openToast: (state, {payload}) => {
			state.message = payload.message;
			state.type = payload.type || 'info';
		},
		closeToast: () => initialState,
	},
});

export const {openToast, closeToast} = toastSlice.actions;

export const selectToastInfo = (state) => state.toast;

export const toastReducer = toastSlice.reducer;
