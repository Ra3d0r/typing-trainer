import {
	browserSessionPersistence,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	setPersistence,
	updateProfile,
} from 'firebase/auth';

import {auth} from '../../../firebase';
import {toastActions} from '../../toast/toastSlice';
import {setStatusUser, setUser} from '../userSlice';

const {openToast} = toastActions;

const createUser = async ({email, password, login, remember}, dispatch, navigate, reset) => {
	try {
		dispatch(setStatusUser('loading'));

		await createUserWithEmailAndPassword(auth, email, password);

		await sendEmailVerification(auth.currentUser);

		dispatch(openToast({message: 'Verification email sent!', type: 'info'}));

		await updateProfile(auth.currentUser, {
			displayName: login,
		});

		if (!remember) {
			setPersistence(auth, browserSessionPersistence);
		}

		reset();
		dispatch(
			setUser({
				login,
				id: auth.currentUser.uid,
				token: auth.currentUser.refreshToken,
			}),
		);
		navigate('/account');
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		dispatch(setStatusUser('error'));
		dispatch(openToast({message: errorMessage, type: 'error'}));
		console.log(errorCode, errorMessage);
	}
};

export default createUser;
