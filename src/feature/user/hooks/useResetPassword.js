import {useDispatch} from 'react-redux';

import resetPassword from '../auth/resetPassword';

const useResetPassword = () => {
	const dispatch = useDispatch();
	return (data) => resetPassword(data, dispatch);
};

export default useResetPassword;
