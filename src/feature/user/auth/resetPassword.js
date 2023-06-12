import {getAuth, sendPasswordResetEmail} from 'firebase/auth';

import {openToast} from '../../toast/toastSlice';

const resetPassword = ({email}, dispatch) => {
	const auth = getAuth();
	sendPasswordResetEmail(auth, email)
		.then(() => {
			dispatch(openToast({message: 'Password reset email sent!', type: 'success'}));
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			dispatch(openToast({message: errorMessage, type: 'error'}));
			console.log(errorCode, errorMessage);
		});
};

export default resetPassword;
