import {UseFormReset} from 'react-hook-form';
import {NavigateFunction} from 'react-router-dom';

import {IDataFormLoginUser} from '@types';

import {AppDispatch} from '@store/store';

export type typeLoginUser = (
	data: IDataFormLoginUser,
	dispatch: AppDispatch,
	navigate: NavigateFunction,
	reset: UseFormReset<IDataFormLoginUser>,
) => void;
