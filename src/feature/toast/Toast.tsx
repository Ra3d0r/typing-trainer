import useToast from '@hooks/useToast';

import ToastAlert from '@components/alerts/ToastAlert';

const Toast = ({ms = 3000}) => {
	const [message, type, closeToast] = useToast(ms);

	if (!message) {
		return null;
	}

	return (
		<div className="fixed top-4 right-4 w-1/4">
			<ToastAlert type={type} onClick={closeToast}>
				{message}
			</ToastAlert>
		</div>
	);
};

export default Toast;
