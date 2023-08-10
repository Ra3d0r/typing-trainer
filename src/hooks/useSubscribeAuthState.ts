import {onAuthStateChanged} from 'firebase/auth';

import {userActions} from '@feature/user/userSlice';

import {useAppDispatch} from '@store/redux-hooks';

import {auth} from '../firebase';

const {setUser} = userActions;

const useSubscribeAuthState = () => {
	const dispatch = useAppDispatch();

	//Also launch when start an application.
	onAuthStateChanged(auth, (user) => {
		if (user?.displayName) {
			dispatch(setUser({id: user.uid, login: user.displayName}));
		}
	});
};

export default useSubscribeAuthState;
