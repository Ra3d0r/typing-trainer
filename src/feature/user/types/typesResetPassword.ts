import {UseFormReset} from 'react-hook-form';

import {AppDispatch} from '@store/store';

export interface IDataFormResetPassword {
	email: string;
}

export type typeResetPassword = (
	data: IDataFormResetPassword,
	dispatch: AppDispatch,
	reset: UseFormReset<IDataFormResetPassword>,
) => void;
