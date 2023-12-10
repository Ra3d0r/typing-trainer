import {TFunction} from 'i18next';
import {UseFormReset} from 'react-hook-form';

import {IDataFormChangeEmail} from '@types';

import {AppDispatch} from '@store/store';

export type typeChangeEmail = (
	data: IDataFormChangeEmail,
	dispatch: AppDispatch,
	reset: UseFormReset<IDataFormChangeEmail>,
	t: TFunction<'translation', undefined>,
) => void;
