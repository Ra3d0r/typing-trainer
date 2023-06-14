import {createUserWithEmailAndPassword, sendEmailVerification, updateProfile} from 'firebase/auth';

import {auth} from '../../../firebase';
import {openToast} from '../../toast/toastSlice';
import {setStatusUser, setUser} from '../userSlice';

const createUser = async ({email, password, login}, dispatch, navigate, reset) => {
	try {
		dispatch(setStatusUser('loading'));

		await createUserWithEmailAndPassword(auth, email, password);

		await sendEmailVerification(auth.currentUser);

		dispatch(openToast({message: 'Verification email sent!', type: 'info'}));

		await updateProfile(auth.currentUser, {
			displayName: login,
		});

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
