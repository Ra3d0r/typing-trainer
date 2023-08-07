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
		accuracy: 100,
		typos: 0,
		time: 0,
		chars: 0,
	},
	normal: {
		accuracy: 100,
		typos: 0,
		time: 0,
		chars: 0,
	},
	hard: {
		accuracy: 100,
		typos: 0,
		time: 0,
		chars: 0,
	},
	custom: {
		accuracy: 100,
		typos: 0,
		time: 0,
		chars: 0,
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
			state[payload.mode].chars = payload.chars;
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
