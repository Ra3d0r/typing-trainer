import {
	User,
	browserSessionPersistence,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	setPersistence,
	updateProfile,
} from 'firebase/auth';

import {auth} from '../../../firebase';
import {toastActions} from '../../toast/toastSlice';
import {typeCreateUser} from '../types/typesCreateUser';
import {userActions} from '../userSlice';

const {setStatusUser, setUser} = userActions;

const {openToast} = toastActions;

const createUser: typeCreateUser = async (
	{email, password, login, remember},
	dispatch,
	navigate,
	reset,
) => {
	try {
		dispatch(setStatusUser('loading'));

		await createUserWithEmailAndPassword(auth, email, password);

		const authUser = auth.currentUser as User;

		await sendEmailVerification(authUser);

		dispatch(openToast({message: 'Verification email sent!', type: 'info'}));

		await updateProfile(authUser, {
			displayName: login,
		});

		if (!remember) {
			setPersistence(auth, browserSessionPersistence);
		}

		reset();
		dispatch(
			setUser({
				login,
				id: authUser.uid,
				token: authUser.refreshToken,
			}),
		);
		navigate('/account');
	} catch (error) {
		if (error instanceof Error) {
			const errorMessage = error.message;
			dispatch(setStatusUser('error'));
			dispatch(openToast({message: errorMessage, type: 'error'}));
			console.log(errorMessage);
		}
	}
};

export default createUser;
