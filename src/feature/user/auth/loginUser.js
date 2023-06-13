import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

import {openToast} from '../../toast/toastSlice';
import {setStatusUser, setUser} from '../userSlice';

const loginUser = ({email, password}, dispatch, navigate, reset) => {
	const auth = getAuth();
	dispatch(setStatusUser('loading'));
	signInWithEmailAndPassword(auth, email, password)
		.then(({user}) => {
			reset();
			dispatch(
				setUser({
					login: user.displayName,
					id: user.uid,
					token: user.refreshToken,
				}),
			);
			navigate('/account');
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			dispatch(setStatusUser('error'));
			dispatch(openToast({message: errorMessage, type: 'error'}));
			console.log(errorCode, errorMessage);
		});
};

export default loginUser;
