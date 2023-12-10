import {UseFormReset} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useDispatch} from 'react-redux';

import {IDataFormChangeEmail} from '@types';

import changeEmail from '../auth/changeEmail';

const useChangeEmail = (reset: UseFormReset<IDataFormChangeEmail>) => {
	const dispatch = useDispatch();
	const {t} = useTranslation('translation');
	return (data: IDataFormChangeEmail) => changeEmail(data, dispatch, reset, t);
};
export default useChangeEmail;
