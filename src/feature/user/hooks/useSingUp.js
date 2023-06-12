import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import createUser from '../auth/createUser';

const useSingUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (data) => createUser(data, dispatch, navigate);
};

export default useSingUp;
