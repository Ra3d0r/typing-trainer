import {UseFormReset} from 'react-hook-form';

import {IDataFormChangePassword} from '@types';

import {AppDispatch} from '@store/store';

export type typeChangePassword = (
	data: IDataFormChangePassword,
	dispatch: AppDispatch,
	reset: UseFormReset<IDataFormChangePassword>,
) => void;
