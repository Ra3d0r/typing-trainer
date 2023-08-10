import {UseFormReset} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {IDataFormChangeEmail} from '@types';

import changeEmail from '../auth/changeEmail';

const useChangeEmail = (reset: UseFormReset<IDataFormChangeEmail>) => {
	const dispatch = useDispatch();
	return (data: IDataFormChangeEmail) => changeEmail(data, dispatch, reset);
};
export default useChangeEmail;
