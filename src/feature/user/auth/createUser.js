import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';

import {auth} from '../../../firebase';
import {openToast} from '../../toast/toastSlice';
import {setStatusUser, setUser} from '../userSlice';

const createUser = ({email, password, login}, dispatch, navigate, reset) => {
	dispatch(setStatusUser('loading'));
	createUserWithEmailAndPassword(auth, email, password)
		.then(() => {
			updateProfile(auth.currentUser, {
				displayName: login,
			}).then(() => {
				reset();
				dispatch(
					setUser({
						login,
						id: auth.currentUser.uid,
						token: auth.currentUser.refreshToken,
					}),
				);
				navigate('/account');
			});
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			dispatch(setStatusUser('error'));
			dispatch(openToast({message: errorMessage, type: 'error'}));
			console.log(errorCode, errorMessage);
		});
};

export default createUser;
