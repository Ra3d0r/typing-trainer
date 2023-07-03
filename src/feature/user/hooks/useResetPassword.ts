import {UseFormReset} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import resetPassword from '../auth/resetPassword';
import {IDataFormResetPassword} from '../types/typesResetPassword';

const useResetPassword = (reset: UseFormReset<IDataFormResetPassword>) => {
	const dispatch = useDispatch();
	return (data: IDataFormResetPassword) => resetPassword(data, dispatch, reset);
};

export default useResetPassword;
