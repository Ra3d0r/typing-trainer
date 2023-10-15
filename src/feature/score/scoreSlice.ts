import {createSlice} from '@reduxjs/toolkit';

import {
	typeActionAddTotalChars,
	typeActionIncreaseTypos,
	typeActionResetScore,
	typeActionUpdateAccuracy,
	typeActionUpdateCorrectness,
	typeActionUpdateTime,
	typeInitialState,
} from './types/typesSlice';

export const initialState: typeInitialState = {
	easy: {
		accuracy: 100,
		typos: 0,
		time: 0,
		chars: 0,
		correctness: 100,
	},
	normal: {
		accuracy: 100,
		typos: 0,
		time: 0,
		chars: 0,
		correctness: 100,
	},
	hard: {
		accuracy: 100,
		typos: 0,
		time: 0,
		chars: 0,
		correctness: 100,
	},
	custom: {
		accuracy: 100,
		typos: 0,
		time: 0,
		chars: 0,
		correctness: 100,
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
		updateCorrectness: (state, {payload}: typeActionUpdateCorrectness) => {
			const {currentTextIndex, errorsIndex, mode, isIncreaseTypos = false} = payload;
			const {chars} = state[mode];

			if (isIncreaseTypos) {
				const typos = Object.keys(errorsIndex).length + 1;
				state[mode].correctness = Number((((chars - typos) / chars) * 100).toFixed(2));
				return;
			}

			if (errorsIndex[currentTextIndex - 1]) {
				const typos = Object.keys(errorsIndex).length - 1;
				state[mode].correctness = Number((((chars - typos) / chars) * 100).toFixed(2));
				return;
			}
		},
	},
});

export const scoreActions = scoreSlice.actions;

export const scoreReducer = scoreSlice.reducer;
