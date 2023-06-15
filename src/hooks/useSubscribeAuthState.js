import {onAuthStateChanged} from 'firebase/auth';
import {useDispatch} from 'react-redux';

import {setUser} from '../feature/user/userSlice';
import {auth} from '../firebase';

const useSubscribeAuthState = () => {
	const dispatch = useDispatch();

	//Also launch when start an application.
	onAuthStateChanged(auth, (user) => {
		if (user?.displayName) {
			dispatch(setUser({id: user.uid, token: user.refreshToken, login: user.displayName}));
		}
	});
};

export default useSubscribeAuthState;
