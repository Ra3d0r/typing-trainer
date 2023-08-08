import {UseFormReset} from 'react-hook-form';

import {IDataFormChangeEmail} from '@types';

import {AppDispatch} from '@store/store';

export type typeChangeEmail = (
	data: IDataFormChangeEmail,
	dispatch: AppDispatch,
	reset: UseFormReset<IDataFormChangeEmail>,
) => void;
