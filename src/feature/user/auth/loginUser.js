import {signInWithEmailAndPassword} from 'firebase/auth';

import {auth} from '../../../firebase';
import {openToast} from '../../toast/toastSlice';
import {setStatusUser} from '../userSlice';

const loginUser = ({email, password}, dispatch, navigate, reset) => {
	dispatch(setStatusUser('loading'));
	signInWithEmailAndPassword(auth, email, password)
		.then(() => {
			reset();
			navigate('/account');
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			dispatch(setStatusUser('error'));
			dispatch(openToast({message: errorMessage, type: 'error'}));
			console.log(errorCode, errorMessage);
		});
};

export default loginUser;
