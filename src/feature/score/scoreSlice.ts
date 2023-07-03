import {createSlice} from '@reduxjs/toolkit';

import {
	typeActionAddTotalChars,
	typeActionIncreaseTypos,
	typeActionResetScore,
	typeActionUpdateAccuracy,
	typeActionUpdateTime,
	typeInitialState,
} from './types/typesSlice';

const initialState: typeInitialState = {
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
		reset: (state, {payload}: typeActionResetScore) => ({
			...state,
			[payload.mode]: initialState[payload.mode],
		}),
		addTotalChars: (state, {payload}: typeActionAddTotalChars) => {
			state[payload.mode].totalChars = payload.chars;
		},
		updateAccuracy: (state, {payload}: typeActionUpdateAccuracy) => {
			state[payload.mode].accuracy = payload.percent;
		},
		increaseTypos: (state, {payload}: typeActionIncreaseTypos) => {
			state[payload.mode].typos++;
		},
		updateTime: (state, {payload}: typeActionUpdateTime) => {
			state[payload.mode].time += 1000;
		},
	},
});

export const scoreActions = scoreSlice.actions;

export const scoreReducer = scoreSlice.reducer;
