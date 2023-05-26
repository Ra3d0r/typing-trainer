import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	speed: 0,
	accuracy: 0,
	typos: 0,
	time: 0,
	totalChars: 0,
};

const scoreSlice = createSlice({
	name: '@@score',
	initialState,
	reducers: {
		reset: () => initialState,
		addTotalChars: (state, action) => {
			state.totalChars = action.payload;
		},
		updateAccuracy: (state, action) => {
			state.accuracy = action.payload;
		},
		addTypos: (state, action) => {
			state.typos = action.payload;
		},
		updateTime: (state, action) => {
			state.time += 1000;
		},
	},
});

export const {reset, addTotalChars, updateAccuracy, addTypos, updateTime} = scoreSlice.actions;

export const scoreReducer = scoreSlice.reducer;
