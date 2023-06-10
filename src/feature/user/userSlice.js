import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	login: null,
	token: null,
	id: null,
};

const userSlice = createSlice({
	name: '@@user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.login = action.payload.login;
			state.token = action.payload.token;
			state.id = action.payload.id;
		},
		reset: () => initialState,
	},
});

export const {setUser, reset} = userSlice.actions;

export const selectUserAuth = (state) => !!state.user.login;

export const userReducer = userSlice.reducer;
