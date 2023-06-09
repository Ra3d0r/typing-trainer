import {useDispatch} from 'react-redux';

import createUser from '../auth/createUser';

const useSingUp = () => {
	const dispatch = useDispatch();
	return (data) => createUser(data, dispatch);
};

export default useSingUp;
