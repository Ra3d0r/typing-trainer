import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';

import {setUser} from '../userSlice';

const createUser = ({email, password}, dispatch) => {
	const auth = getAuth();
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			console.log(userCredential);
			const user = userCredential.user;
			dispatch(
				setUser({
					email: user.email,
					id: user.uid,
					token: user.refreshToken,
				}),
			);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(errorCode, errorMessage);
		});
};

export default createUser;
