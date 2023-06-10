import {createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth';

import {setUser} from '../userSlice';

const createUser = ({email, password, login}, dispatch) => {
	const auth = getAuth();
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
			});
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
};

export default createUser;
