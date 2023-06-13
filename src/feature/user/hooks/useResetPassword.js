import {useDispatch} from 'react-redux';

import resetPassword from '../auth/resetPassword';

const useResetPassword = (reset) => {
	const dispatch = useDispatch();
	return (data) => resetPassword(data, dispatch, reset);
};

export default useResetPassword;
