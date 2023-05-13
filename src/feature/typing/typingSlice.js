import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {randomIntFromInterval} from '../../helpers/randomIntFromInterval';

export const requestText = createAsyncThunk(
	'@@typing/loading-text',
	async (url, {extra: api, dispatch}) => {
		const quotes = await api.loadText(url);
		dispatch(addCurrentText(quotes));
		return quotes;
	},
);

const initialState = {
	entities: {
		easy: {
			currentText: [],
			currentTextIndex: 0,
			currentLetter: '',
			errorIndex: [],
			allText: null,
		},
		normal: {
			currentText: [],
			currentTextIndex: 0,
			currentLetter: '',
			errorIndex: [],
			allText: null,
		},
		hard: {
			currentText: [],
			currentTextIndex: 0,
			currentLetter: '',
			errorIndex: [],
			allText: null,
		},
		custom: {
			currentText: [],
			currentTextIndex: 0,
			currentLetter: '',
			errorIndex: [],
		},
	},
	status: 'idle',
	error: null,
};

const typingSlice = createSlice({
	name: '@@typing',
	initialState,
	reducers: {
		addCurrentText: (state, action) => {
			const randomNumber = randomIntFromInterval(0, action.payload.length);
			const text = action.payload[randomNumber].text;
			state.entities.easy.currentText = text.split('');
			state.entities.easy.currentLetter = text[0];
			state.entities.easy.errorIndex = [];
			state.entities.easy.currentTextIndex = 0;
		},
		nextLetter: (state) => {
			const index = state.entities.easy.currentTextIndex;
			const letter = state.entities.easy.currentText[index + 1];
			state.entities.easy.currentTextIndex++;
			state.entities.easy.currentLetter = letter;
		},
		addErrorIndex: (state) => {
			state.entities.easy.errorIndex.push(state.entities.easy.currentTextIndex);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(requestText.fulfilled, (state, action) => {
				state.entities.easy.allText = action.payload;
				state.status = 'idle';
			})
			.addCase(requestText.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(requestText.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const {addCurrentText, nextLetter, addErrorIndex} = typingSlice.actions;

export const typingReducer = typingSlice.reducer;
