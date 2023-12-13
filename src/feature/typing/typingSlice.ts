import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {
	IConfigText,
	IConfigThunkOptions,
	IReturnThunk,
	typeActionCurrentText,
	typeActionErrorIndex,
	typeActionNextLetter,
	typeActionPreviousLetter,
	typeActionStatusCustom,
	typeInitialState,
} from './types/typesSlice';

export const requestText = createAsyncThunk<IReturnThunk, IConfigText, IConfigThunkOptions>(
	'@@api/loading-text',
	async ({mode, lang}, {extra: {api}, dispatch, rejectWithValue}) => {
		try {
			const [allText, text] = await api.loadText(mode, lang);
			dispatch(addCurrentText({text, mode}));
			return {allText, mode};
		} catch (err) {
			return rejectWithValue(`Failed to fetch text for game mode - ${mode}`);
		}
	},
);

export const initialState: typeInitialState = {
	easy: {
		currentText: [],
		currentTextIndex: 0,
		errorsIndex: {},
		allText: [],
		status: 'idle',
		error: null,
	},
	normal: {
		currentText: [],
		currentTextIndex: 0,
		errorsIndex: {},
		allText: [],
		status: 'idle',
		error: null,
	},
	hard: {
		currentText: [],
		currentTextIndex: 0,
		errorsIndex: {},
		allText: [],
		status: 'idle',
		error: null,
	},
	custom: {
		currentText: [],
		currentTextIndex: 0,
		errorsIndex: {},
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
		previousLetter: (state, {payload: {mode, currentTextIndex}}: typeActionPreviousLetter) => {
			if (state[mode].currentTextIndex >= 1) {
				state[mode].currentTextIndex--;
			}

			if (currentTextIndex - 1 in state[mode].errorsIndex) {
				delete state[mode].errorsIndex[currentTextIndex - 1];
			}
		},
		addErrorIndex: (state, {payload: {currentTextIndex, mode}}: typeActionErrorIndex) => {
			state[mode].errorsIndex = {...state[mode].errorsIndex, [currentTextIndex]: 'error'};
		},
		changeStatusCustomMode: (state, action: typeActionStatusCustom) => {
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
				state[mode].error =
					typeof action.payload === 'string' ? action.payload : 'Something went wrong';
			});
	},
});

export const typingActions = typingSlice.actions;
const {addCurrentText} = typingActions;

export const typingReducer = typingSlice.reducer;
