import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	login: null,
	token: null,
	id: null,
	status: 'idle', // idle, loading, fulfilled, error
};

const userSlice = createSlice({
	name: '@@user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.login = action.payload.login;
			state.token = action.payload.token;
			state.id = action.payload.id;
			state.status = 'fulfilled';
		},
		setStatusUser: (state, action) => {
			state.status = action.payload;
		},
		resetUser: () => initialState,
	},
});

export const {setUser, resetUser, setStatusUser} = userSlice.actions;

export const selectUserAuth = (state) => !!state.user.login;
export const selectLogin = (state) => state.user.login;
export const selectStatusUser = (state) => state.user.status;

export const userReducer = userSlice.reducer;
