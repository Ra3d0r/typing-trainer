import {UseFormReset} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {IDataFormLoginUser} from '@types';

import loginUser from '../auth/loginUser';

const useSingIn = (reset: UseFormReset<IDataFormLoginUser>) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (data: IDataFormLoginUser) => loginUser(data, dispatch, navigate, reset);
};

export default useSingIn;
