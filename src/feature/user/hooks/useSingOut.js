import {signOut} from 'firebase/auth';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {auth} from '../../../firebase';
import {openToast} from '../../toast/toastSlice';
import {resetUser} from '../userSlice';

const useSingOut = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return () => {
		signOut(auth)
			.then(() => {
				navigate('/');
				dispatch(openToast({message: 'Sign out successful!', type: 'info'}));
				dispatch(resetUser());
			})
			.catch((error) => {
				dispatch(openToast({message: error.message, type: 'error'}));
			});
	};
};

export default useSingOut;
