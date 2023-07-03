import {UseFormReset} from 'react-hook-form';
import {NavigateFunction} from 'react-router-dom';

import {AppDispatch} from '@store/store';

export interface IDataFormCreateUser {
	login: string;
	password: string;
	email: string;
	remember: boolean;
}

export type typeCreateUser = (
	data: IDataFormCreateUser,
	dispatch: AppDispatch,
	navigate: NavigateFunction,
	reset: UseFormReset<IDataFormCreateUser>,
) => void;
