import {UseFormReset} from 'react-hook-form';
import {NavigateFunction} from 'react-router-dom';

import {IDataFormCreateUser} from '@types';

import {AppDispatch} from '@store/store';

export type typeCreateUser = (
	data: IDataFormCreateUser,
	dispatch: AppDispatch,
	navigate: NavigateFunction,
	reset: UseFormReset<IDataFormCreateUser>,
) => void;
