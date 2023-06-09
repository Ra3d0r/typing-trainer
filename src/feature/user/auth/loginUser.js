import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

import {setUser} from '../userSlice';

const loginUser = ({email, password}, dispatch) => {
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(userCredential);
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

export default loginUser;
