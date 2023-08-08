import {User, updateProfile} from 'firebase/auth';

import {auth} from '../../../firebase';
import {toastActions} from '../../toast/toastSlice';
import {typeChangeLogin} from '../types/typesChangeLogin';
import {userActions} from '../userSlice';

const {setStatusUser, setUser} = userActions;

const {openToast} = toastActions;

const changeLogin: typeChangeLogin = async ({login}, dispatch, reset) => {
	try {
		const authUser = auth.currentUser as User;
		await updateProfile(authUser, {
			displayName: login,
		});
		dispatch(openToast({message: 'Login changed', type: 'success'}));
		dispatch(
			setUser({
				login,
				id: authUser.uid,
			}),
		);
		reset();
	} catch (error) {
		if (error instanceof Error) {
			const errorMessage = error.message;
			dispatch(setStatusUser('error'));
			dispatch(openToast({message: errorMessage, type: 'error'}));
		}
		console.error(error);
	}
};

export default changeLogin;
