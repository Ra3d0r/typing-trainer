import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import loginUser from '../auth/loginUser';

const useSingIn = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (data) => loginUser(data, dispatch, navigate);
};

export default useSingIn;
