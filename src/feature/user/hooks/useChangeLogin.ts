import {UseFormReset} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {IDataFormChangeLoginUser} from '@types';

import changeLogin from '../auth/changeLogin';

const useChangeLogin = (reset: UseFormReset<IDataFormChangeLoginUser>) => {
	const dispatch = useDispatch();
	return (data: IDataFormChangeLoginUser) => changeLogin(data, dispatch, reset);
};
export default useChangeLogin;
