import {UseFormReset} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import {IDataFormChangePassword} from '@types';

import changePassword from '../auth/changePassword';

const useResetPassword = (reset: UseFormReset<IDataFormChangePassword>) => {
	const dispatch = useDispatch();
	const {t} = useTranslation('translation');
	return (data: IDataFormChangePassword) => changePassword(data, dispatch, reset, t);
};

export default useResetPassword;
