import {UseFormReset} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {IDataFormResetPassword} from '@types';

import resetPassword from '../auth/resetPassword';

const useResetPassword = (reset: UseFormReset<IDataFormResetPassword>) => {
	const dispatch = useDispatch();
	return (data: IDataFormResetPassword) => resetPassword(data, dispatch, reset);
};

export default useResetPassword;
