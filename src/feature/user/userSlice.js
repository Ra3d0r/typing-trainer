import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	email: null,
	token: null,
	id: null,
};

const userSlice = createSlice({
	name: '@@user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.id = action.payload.id;
		},
		reset: () => initialState,
	},
});

export const {setUser, reset} = userSlice.actions;

export const selectUserAuth = (state) => !!state.user.email;

export const userReducer = userSlice.reducer;
