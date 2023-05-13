import {createSlice} from '@reduxjs/toolkit';

import {keyIdButtons} from '../../../public/data/keyIdButtons';

const initialState = {
	entities: '',
};

const keyboardSlice = createSlice({
	name: '@@keyboard',
	initialState,
	reducers: {
		addCurrentKey: (state, action) => {
			const keyId = keyIdButtons[action.payload];
			state.entities = keyId;
		},
	},
});

export const {addCurrentKey} = keyboardSlice.actions;

export const keyboardReducer = keyboardSlice.reducer;
