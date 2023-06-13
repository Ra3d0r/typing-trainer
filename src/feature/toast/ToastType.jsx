import ErrorAlert from '../../components/alerts/ErrorAlert';
import SuccessAlert from '../../components/alerts/SuccessAlert';
import WarningAlert from '../../components/alerts/WarningAlert';
import InfoAlert from '../../components/alerts/infoAlert';

const ToastType = ({onClick, type, message}) => {
	switch (type) {
		case 'info':
			return <InfoAlert onClick={onClick}>{message}</InfoAlert>;
		case 'success':
			return <SuccessAlert onClick={onClick}>{message}</SuccessAlert>;
		case 'error':
			return <ErrorAlert onClick={onClick}>{message}</ErrorAlert>;
		case 'warning':
			return <WarningAlert onClick={onClick}>{message}</WarningAlert>;
		default:
			<InfoAlert onClick={onClick}>{message}</InfoAlert>;
	}
};

export default ToastType;
