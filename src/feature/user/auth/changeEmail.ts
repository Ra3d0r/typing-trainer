import {User, updateEmail} from 'firebase/auth';

import {auth} from '../../../firebase';
import {toastActions} from '../../toast/toastSlice';
import {typeChangeEmail} from '../types/typesChangeEmail';
import {userActions} from '../userSlice';

const {setStatusUser} = userActions;

const {openToast} = toastActions;

const changeEmail: typeChangeEmail = async ({email}, dispatch, reset, t) => {
	try {
		dispatch(setStatusUser('loading'));
		const authUser = auth.currentUser as User;
		await updateEmail(authUser, email);
		dispatch(openToast({message: t('emailMessage'), type: 'success'}));
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

export default changeEmail;
