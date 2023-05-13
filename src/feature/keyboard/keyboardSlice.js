import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	enable: true,
};

const keyboardSlice = createSlice({
	name: '@@keyboard',
	initialState,
	reducers: {
		toggleEnable: (state) => !state.enable,
	},
});

export const {toggleEnable} = keyboardSlice.actions;

export const keyboardReducer = keyboardSlice.reducer;
