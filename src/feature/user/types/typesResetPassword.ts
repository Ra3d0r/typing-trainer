import {TFunction} from 'i18next';
import {UseFormReset} from 'react-hook-form';

import {IDataFormResetPassword} from '@types';

import {AppDispatch} from '@store/store';

export type typeResetPassword = (
	data: IDataFormResetPassword,
	dispatch: AppDispatch,
	reset: UseFormReset<IDataFormResetPassword>,
	t: TFunction<'translation'>,
) => void;
