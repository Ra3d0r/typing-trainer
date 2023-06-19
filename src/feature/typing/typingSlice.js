import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const requestText = createAsyncThunk(
	'@@typing/loading-text',
	async ({url, mode, headers}, {extra: {api}, dispatch, rejectWithValue}) => {
		try {
			const [allText, text] = await api.loadText(url, headers, mode);
			dispatch(addCurrentText({text, mode}));
			return {allText, mode};
		} catch (err) {
			return rejectWithValue(`Failed to fetch text for game mode - ${mode}`);
		}
	},
);

const initialState = {
	easy: {
		currentText: [],
		currentTextIndex: 0,
		errorsIndex: [],
		allText: null,
		status: 'idle',
		error: null,
	},
	normal: {
		currentText: [],
		currentTextIndex: 0,
		errorsIndex: [],
		allText: null,
		status: 'idle',
		error: null,
	},
	hard: {
		currentText: [],
		currentTextIndex: 0,
		errorsIndex: [],
		allText: null,
		status: 'idle',
		error: null,
	},
	custom: {
		currentText: [],
		currentTextIndex: 0,
		errorsIndex: [],
		allText: null,
		status: 'idle',
		error: null,
	},
};

const typingSlice = createSlice({
	name: '@@typing',
	initialState,
	reducers: {
		addCurrentText: (state, {payload: {mode, text}}) => {
			state[mode].currentText = text.split('');
			state[mode].errorsIndex = [];
			state[mode].currentTextIndex = 0;
		},
		nextLetter: (state, {payload: {mode}}) => {
			state[mode].currentTextIndex++;
		},
		addErrorIndex: (state, {payload: {currentTextIndex, mode}}) => {
			state[mode].errorsIndex.push(currentTextIndex);
		},
		changeStatusCustomMode: (state, action) => {
			state.custom.status = action.payload;
		},
		resetCustomModeText: (state) => {
			state.custom.currentText = [];
			state.custom.currentTextIndex = 0;
			state.custom.errorsIndex = [];
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(requestText.fulfilled, (state, {payload: {allText, mode}}) => {
				state[mode].allText = allText;
				state[mode].status = 'fulfilled';
			})
			.addCase(requestText.pending, (state, action) => {
				const mode = action.meta.arg.mode;
				state[mode].status = 'loading';
				state[mode].error = null;
			})
			.addCase(requestText.rejected, (state, action) => {
				const mode = action.meta.arg.mode;
				state[mode].status = 'failed';
				state[mode].error = action.payload;
			});
	},
});

export const {
	addCurrentText,
	nextLetter,
	addErrorIndex,
	changeStatusCustomMode,
	resetCustomModeText,
} = typingSlice.actions;

export const selectCurrentLetter = (state, mode) => {
	const index = state.typing[mode].currentTextIndex;
	return state.typing[mode].currentText[index];
};

export const selectCurrentTextIndex = (state, mode) => state.typing[mode].currentTextIndex;
export const selectCurrentText = (state, mode) => state.typing[mode].currentText;
export const selectAllInfoText = (state, mode) => state.typing[mode];

export const selectTypingStatus = (state, mode) => state.typing[mode].status;

export const typingReducer = typingSlice.reducer;
