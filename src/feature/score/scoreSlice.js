import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	easy: {
		speed: 0,
		accuracy: 100,
		typos: 0,
		time: 0,
		totalChars: 0,
	},
	normal: {
		speed: 0,
		accuracy: 100,
		typos: 0,
		time: 0,
		totalChars: 0,
	},
	hard: {
		speed: 0,
		accuracy: 100,
		typos: 0,
		time: 0,
		totalChars: 0,
	},
	custom: {
		speed: 0,
		accuracy: 100,
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
		updateAccuracy: (state, {payload}) => {
			state[payload.mode].accuracy = payload.percent;
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
export const selectTypos = (state, mode) => state.score[mode].typos;
export const selectAccuracy = (state, mode) => state.score[mode].accuracy;
export const selectTime = (state, mode) => state.score[mode].time;
export const selectTotalChars = (state, mode) => state.score[mode].totalChars;

export const scoreReducer = scoreSlice.reducer;
