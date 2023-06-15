import {onAuthStateChanged} from 'firebase/auth';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {setUser} from '../feature/user/userSlice';
import {auth} from '../firebase';

const useCurrentUser = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(setUser({id: user.uid, token: user.refreshToken, login: user.displayName}));
			}
		});
	}, []);
};

export default useCurrentUser;
