import {User, updatePassword} from 'firebase/auth';

import {auth} from '../../../firebase';
import {toastActions} from '../../toast/toastSlice';
import {typeChangePassword} from '../types/typesChangePassword';
import {userActions} from '../userSlice';

const {setStatusUser} = userActions;

const {openToast} = toastActions;

const changePassword: typeChangePassword = async ({password}, dispatch, reset) => {
	try {
		dispatch(setStatusUser('loading'));
		const authUser = auth.currentUser as User;
		await updatePassword(authUser, password);
		dispatch(openToast({message: 'Password changed', type: 'success'}));
		reset();
		dispatch(setStatusUser('fulfilled'));
	} catch (error) {
		if (error instanceof Error) {
			const errorMessage = error.message;
			dispatch(setStatusUser('error'));
			dispatch(openToast({message: errorMessage, type: 'error'}));
		}
		console.error(error);
	}
};

export default changePassword;
