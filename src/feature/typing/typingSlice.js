import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const requestText = createAsyncThunk(
	'@@typing/loading-text',
	async ({url, mode, headers}, {extra: {api}, dispatch, rejectWithValue}) => {
		try {
			const [allText, text] = await api.loadText(url, headers, mode);
			dispatch(addCurrentText({text, mode}));
			return {allText, mode};
		} catch (err) {
			return rejectWithValue(`Failed to fetch all text for game ${mode}`);
		}
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
		addCurrentText: (state, {payload: {mode, text}}) => {
			state.entities[mode].currentText = text.split('');
			state.entities[mode].errorsIndex = [];
			state.entities[mode].currentTextIndex = 0;
		},
		nextLetter: (state, {payload: {mode}}) => {
			state.entities[mode].currentTextIndex++;
		},
		addErrorIndex: (state, {payload: {currentTextIndex, mode}}) => {
			state.entities[mode].errorsIndex.push(currentTextIndex);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(requestText.fulfilled, (state, {payload: {allText, mode}}) => {
				state.entities[mode].allText = allText;
				state.status = 'idle';
			})
			.addCase(requestText.pending, (state) => {
				state.status = 'loading';
				state.error = null;
			})
			.addCase(requestText.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload;
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
