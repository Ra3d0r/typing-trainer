import {UseFormReset} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import {IDataFormResetPassword} from '@types';

import resetPassword from '../auth/resetPassword';

const useResetPassword = (reset: UseFormReset<IDataFormResetPassword>) => {
	const dispatch = useDispatch();
	const {t} = useTranslation('translation');
	return (data: IDataFormResetPassword) => resetPassword(data, dispatch, reset, t);
};

export default useResetPassword;
