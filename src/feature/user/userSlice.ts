import {createSlice} from '@reduxjs/toolkit';

import {IInitialState, typActionSetUser, typeActionSetStatusUser} from './types/typesSlice';

const initialState: IInitialState = {
	login: null,
	id: null,
	status: 'idle',
};

const userSlice = createSlice({
	name: '@@user',
	initialState,
	reducers: {
		setUser: (state, action: typActionSetUser) => {
			state.login = action.payload.login;
			state.id = action.payload.id;
			state.status = 'fulfilled';
		},
		setStatusUser: (state, action: typeActionSetStatusUser) => {
			state.status = action.payload;
		},
		resetUser: () => initialState,
	},
});

export const userActions = userSlice.actions;

export const userReducer = userSlice.reducer;
