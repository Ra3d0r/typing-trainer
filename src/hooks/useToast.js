import {useDispatch, useSelector} from 'react-redux';

import {closeToast, selectToastInfo} from '../feature/toast/toastSlice';
import useTimeout from './utils/useTimeout';

const useToast = (ms) => {
	const {message, type} = useSelector(selectToastInfo);
	const dispatch = useDispatch();

	const closeAlert = () => dispatch(closeToast());

	useTimeout(message, ms, closeAlert);

	return [message, type, closeAlert];
};

export default useToast;
