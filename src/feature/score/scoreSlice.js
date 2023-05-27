import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	easy: {
		speed: 0,
		accuracy: 0,
		typos: 0,
		time: 0,
		totalChars: 0,
	},
	normal: {
		speed: 0,
		accuracy: 0,
		typos: 0,
		time: 0,
		totalChars: 0,
	},
	hard: {
		speed: 0,
		accuracy: 0,
		typos: 0,
		time: 0,
		totalChars: 0,
	},
	custom: {
		speed: 0,
		accuracy: 0,
		typos: 0,
		time: 0,
		totalChars: 0,
	},
};

const scoreSlice = createSlice({
	name: '@@score',
	initialState,
	reducers: {
		reset: (state, {payload}) => ({...state, [payload.mode]: initialState[payload.mode]}),
		addTotalChars: (state, {payload}) => {
			state[payload.mode].totalChars = payload.chars;
		},
		updateAccuracy: (state, action) => {
			state.accuracy = action.payload;
		},
		increaseTypos: (state, {payload}) => {
			state[payload.mode].typos++;
		},
		updateTime: (state, {payload}) => {
			state[payload.mode].time += 1000;
		},
	},
});

export const {reset, addTotalChars, updateAccuracy, increaseTypos, updateTime} = scoreSlice.actions;

export const selectAllScore = (state, mode) => state.score[mode];
export const selectCurrentTypos = (state, mode) => state.score[mode].typos;

export const scoreReducer = scoreSlice.reducer;
