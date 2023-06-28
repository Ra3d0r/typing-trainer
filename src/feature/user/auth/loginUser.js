import {browserSessionPersistence, setPersistence, signInWithEmailAndPassword} from 'firebase/auth';

import {auth} from '../../../firebase';
import {toastActions} from '../../toast/toastSlice';
import {setStatusUser} from '../userSlice';

const {openToast} = toastActions;

const loginUser = ({email, password, remember}, dispatch, navigate, reset) => {
	dispatch(setStatusUser('loading'));
	signInWithEmailAndPassword(auth, email, password)
		.then(() => {
			reset();
			navigate('/account');
			if (!remember) {
				setPersistence(auth, browserSessionPersistence);
			}
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
