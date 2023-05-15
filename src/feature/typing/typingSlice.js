import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {randomIntFromInterval} from '../../helpers/randomIntFromInterval';

export const requestText = createAsyncThunk(
	'@@typing/loading-text',
	async (url, {extra: api, dispatch}) => {
		const quotes = await api.loadText(url);
		const randomNumber = randomIntFromInterval(0, quotes?.length);
		dispatch(addCurrentText(quotes[randomNumber].text));
		return quotes;
	},
);

const initialState = {
	entities: {
		easy: {
			currentText: [],
			currentTextIndex: 0,
			errorsIndex: [],
			allText: null,
		},
		normal: {
			currentText: [],
			currentTextIndex: 0,
			errorsIndex: [],
			allText: null,
		},
		hard: {
			currentText: [],
			currentTextIndex: 0,
			errorsIndex: [],
			allText: null,
		},
		custom: {
			currentText: [],
			currentTextIndex: 0,
			errorsIndex: [],
		},
	},
	status: 'idle',
	error: null,
};

const typingSlice = createSlice({
	name: '@@typing',
	initialState,
	reducers: {
		addCurrentText: (state, {payload}) => {
			state.entities.easy.currentText = payload.split('');
			state.entities.easy.errorsIndex = [];
			state.entities.easy.currentTextIndex = 0;
		},
		nextLetter: (state) => {
			state.entities.easy.currentTextIndex++;
		},
		addErrorIndex: (state, {payload}) => {
			state.entities.easy.errorsIndex.push(payload);
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

export const selectCurrentLetter = (state, mode) => {
	const index = state.typing.entities[mode].currentTextIndex;
	return state.typing.entities[mode].currentText[index];
};

export const selectCurrentTextIndex = (state, mode) => state.typing.entities[mode].currentTextIndex;
export const selectCurrentText = (state, mode) => state.typing.entities[mode].currentText;
export const selectAllText = (state, mode) => state.typing.entities[mode].allText;
export const selectErrorsIndex = (state, mode) => state.typing.entities[mode].errorsIndex;

export const typingReducer = typingSlice.reducer;
