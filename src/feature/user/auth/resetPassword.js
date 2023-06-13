import {getAuth, sendPasswordResetEmail} from 'firebase/auth';

import {openToast} from '../../toast/toastSlice';
import {setStatusUser} from '../userSlice';

const resetPassword = ({email}, dispatch) => {
	const auth = getAuth();
	dispatch(setStatusUser('loading'));
	sendPasswordResetEmail(auth, email)
		.then(() => {
			dispatch(openToast({message: 'Password reset email sent!', type: 'success'}));
			dispatch(setStatusUser('idle'));
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			dispatch(openToast({message: errorMessage, type: 'error'}));
			console.log(errorCode, errorMessage);
		});
};

export default resetPassword;
