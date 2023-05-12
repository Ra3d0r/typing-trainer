import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	entities: {
		easy: {
			text: [],
			currentTextIndex: 0,
		},
		normal: {
			text: [],
			currentTextIndex: 0,
		},
		hard: {
			text: [],
			currentTextIndex: 0,
		},
		custom: {
			text: [],
			currentTextIndex: 0,
		},
	},
	status: 'idle',
	error: null,
};

const typingSlice = createSlice({
	name: '@@typing',
	initialState,
});
