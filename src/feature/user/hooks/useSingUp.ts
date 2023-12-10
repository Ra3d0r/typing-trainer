import {UseFormReset} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {IDataFormCreateUser} from '@types';

import createUser from '../auth/createUser';

const useSingUp = (reset: UseFormReset<IDataFormCreateUser>) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {t} = useTranslation('translation');
	return (data: IDataFormCreateUser) => createUser(data, dispatch, navigate, reset, t);
};

export default useSingUp;
