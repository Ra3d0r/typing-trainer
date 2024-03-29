import {sendPasswordResetEmail} from 'firebase/auth';

import {auth} from '../../../firebase';
import {toastActions} from '../../toast/toastSlice';
import {typeResetPassword} from '../types/typesResetPassword';
import {userActions} from '../userSlice';

const {setStatusUser} = userActions;

const {openToast} = toastActions;

const resetPassword: typeResetPassword = ({email}, dispatch, reset, t) => {
	dispatch(setStatusUser('loading'));
	sendPasswordResetEmail(auth, email)
		.then(() => {
			reset();
			dispatch(openToast({message: t('resetPasswordMessage'), type: 'success'}));
			dispatch(setStatusUser('idle'));
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			dispatch(openToast({message: errorMessage, type: 'error'}));
			dispatch(setStatusUser('error'));
			console.error(errorCode, errorMessage);
		});
};

export default resetPassword;
