import {useDispatch} from 'react-redux';

import loginUser from '../auth/loginUser';

const useSingIn = () => {
	const dispatch = useDispatch();
	return (data) => loginUser(data, dispatch);
};

export default useSingIn;
