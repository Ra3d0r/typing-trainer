import {signOut} from 'firebase/auth';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';

import {useAppDispatch} from '@store/redux-hooks';

import {toastActions} from '../feature/toast/toastSlice';
import {userActions} from '../feature/user/userSlice';
import {auth} from '../firebase';

const {resetUser} = userActions;
const {openToast} = toastActions;

const useSingOut = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const {t} = useTranslation('translation');
	return () => {
		signOut(auth)
			.then(() => {
				setTimeout(() => {
					navigate('/');
				}, 0);
				dispatch(openToast({message: t('signOutMessage'), type: 'info'}));
				dispatch(resetUser());
			})
			.catch((error) => {
				dispatch(openToast({message: error.message, type: 'error'}));
			});
	};
};

export default useSingOut;
