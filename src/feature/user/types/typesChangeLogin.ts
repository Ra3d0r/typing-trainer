import {TFunction} from 'i18next';
import {UseFormReset} from 'react-hook-form';

import {IDataFormChangeLoginUser} from '@types';

import {AppDispatch} from '@store/store';

export type typeChangeLogin = (
	data: IDataFormChangeLoginUser,
	dispatch: AppDispatch,
	reset: UseFormReset<IDataFormChangeLoginUser>,
	t: TFunction<'translation', undefined>,
) => void;
