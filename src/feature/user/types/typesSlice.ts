import {PayloadAction} from '@reduxjs/toolkit';

import {typeStatusUser} from '@types';

interface payloadSetUser {
	login: string;
	id: string;
}

export interface IInitialState {
	login: null | string;
	id: null | string;
	status: typeStatusUser;
}

export type typActionSetUser = PayloadAction<payloadSetUser>;

export type typeActionSetStatusUser = PayloadAction<typeStatusUser>;
