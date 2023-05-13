import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

function randomIntFromInterval(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

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
			allText: null,
		},
		normal: {
			currentText: [],
			currentTextIndex: 0,
			allText: null,
		},
		hard: {
			currentText: [],
			currentTextIndex: 0,
			allText: null,
		},
		custom: {
			currentText: [],
			currentTextIndex: 0,
			allText: null,
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

export const {addCurrentText} = typingSlice.actions;

export const typingReducer = typingSlice.reducer;
