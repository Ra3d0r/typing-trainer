import {createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth';

import {setStatusUser, setUser} from '../userSlice';

const createUser = ({email, password, login}, dispatch, navigate) => {
	const auth = getAuth();
	dispatch(setStatusUser('loading'));
	createUserWithEmailAndPassword(auth, email, password)
		.then(() => {
			updateProfile(auth.currentUser, {
				displayName: login,
			}).then(() => {
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
			console.log(errorCode, errorMessage);
		});
};

export default createUser;
