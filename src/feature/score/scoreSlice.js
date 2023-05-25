import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	speed: 0,
	accuracy: 0,
	typos: 0,
	time: '00:00',
	totalChars: 0,
};

const scoreSlice = createSlice({
	name: '@@score',
	initialState,
	reducers: {
		reset: () => initialState,
		updateTotalChars: (state, action) => {
			state.totalChars = action.payload;
		},
		updateAccuracy: (state, action) => {
			state.accuracy = action.payload;
		},
		updateTypos: (state, action) => {
			state.typos = action.payload;
		},
		updateTime: (state, action) => {
			state.time = action.payload;
		},
	},
});

export const {reset, updateTotalChars, updateAccuracy, updateTypos, updateTime} =
	scoreSlice.actions;

export const scoreReducer = scoreSlice.reducer;
