import {UseFormReset} from 'react-hook-form';
import {NavigateFunction} from 'react-router-dom';

import {AppDispatch} from '@store/store';

export interface IDataFormLoginUser {
	password: string;
	email: string;
	remember: boolean;
}

export type typeLoginUser = (
	data: IDataFormLoginUser,
	dispatch: AppDispatch,
	navigate: NavigateFunction,
	reset: UseFormReset<IDataFormLoginUser>,
) => void;
