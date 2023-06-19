import useToast from '../../hooks/useToast';
import ToastType from './ToastType';

const Toast = ({ms = 3000}) => {
	const [message, type, closeToast] = useToast(ms);

	if (!message) {
		return null;
	}

	return (
		<div className="fixed top-4 right-4 w-1/4">
			<ToastType type={type} message={message} onClick={closeToast} />
		</div>
	);
};

export default Toast;
