import {UseFormReset} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import {IDataFormChangeLoginUser} from '@types';

import changeLogin from '../auth/changeLogin';

const useChangeLogin = (reset: UseFormReset<IDataFormChangeLoginUser>) => {
	const dispatch = useDispatch();
	const {t} = useTranslation('translation');
	return (data: IDataFormChangeLoginUser) => changeLogin(data, dispatch, reset, t);
};
export default useChangeLogin;
