import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {
	IConfigText,
	IConfigThunkOptions,
	IReturnThunk,
	typeActionCurrentText,
	typeActionErrorIndex,
	typeActionNextLetter,
	typeInitialState,
} from './types/typesSlice';

export const requestText = createAsyncThunk<IReturnThunk, IConfigText, IConfigThunkOptions>(
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

const initialState: typeInitialState = {
	easy: {
		currentText: [],
		currentTextIndex: 0,
		errorsIndex: [],
		allText: [],
		status: 'idle',
		error: null,
	},
	normal: {
		currentText: [],
		currentTextIndex: 0,
		errorsIndex: [],
		allText: [],
		status: 'idle',
		error: null,
	},
	hard: {
		currentText: [],
		currentTextIndex: 0,
		errorsIndex: [],
		allText: [],
		status: 'idle',
		error: null,
	},
	custom: {
		currentText: [],
		currentTextIndex: 0,
		errorsIndex: [],
		allText: [],
		status: 'idle',
		error: null,
	},
};

const typingSlice = createSlice({
	name: '@@typing',
	initialState,
	reducers: {
		addCurrentText: (state, {payload: {mode, text}}: typeActionCurrentText) => {
			state[mode].currentText = text.split('');
			state[mode].errorsIndex = [];
			state[mode].currentTextIndex = 0;
		},
		nextLetter: (state, {payload: {mode}}: typeActionNextLetter) => {
			state[mode].currentTextIndex++;
		},
		addErrorIndex: (state, {payload: {currentTextIndex, mode}}: typeActionErrorIndex) => {
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
				state[mode].error = action.payload as string;
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

export const typingReducer = typingSlice.reducer;
