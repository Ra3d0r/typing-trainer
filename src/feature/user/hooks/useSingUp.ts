import {UseFormReset} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {IDataFormCreateUser} from '@types';

import createUser from '../auth/createUser';

const useSingUp = (reset: UseFormReset<IDataFormCreateUser>) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (data: IDataFormCreateUser) => createUser(data, dispatch, navigate, reset);
};

export default useSingUp;
