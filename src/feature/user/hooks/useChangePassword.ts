import {UseFormReset} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {IDataFormChangePassword} from '@types';

import changePassword from '../auth/changePassword';

const useResetPassword = (reset: UseFormReset<IDataFormChangePassword>) => {
	const dispatch = useDispatch();
	return (data: IDataFormChangePassword) => changePassword(data, dispatch, reset);
};

export default useResetPassword;
