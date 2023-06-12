import {useEffect} from 'react';
import {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ToastType from './ToastType';
import {closeToast, selectToastInfo} from './toastSlice';

const Toast = ({ms = 3000}) => {
	const dispatch = useDispatch();
	const {message, type} = useSelector(selectToastInfo);
	const idTimeout = useRef(null);
	const closeAlert = () => dispatch(closeToast());

	useEffect(() => {
		if (message) {
			idTimeout.current = setTimeout(closeAlert, ms);
		}
		if (!message && idTimeout.current) {
			clearTimeout(idTimeout.current);
		}
	}, [message]);

	if (!message) {
		return null;
	}

	return (
		<div className="fixed top-4 right-4 w-1/4">
			<ToastType type={type} message={message} onClick={closeAlert} />
		</div>
	);
};

export default Toast;
