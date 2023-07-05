import typeHandleKeyDown from './types/typeHandleKeyDown';

const handleKeyDown: typeHandleKeyDown = ({event, setIsShiftPressed, setEventKeyCode, status}) => {
	if (event.key === 'Shift') {
		setIsShiftPressed(true);
	}

	if (
		(status === 'fulfilled' && event.code === 'Space') ||
		(status === 'fulfilled' && event.key === 'Alt') ||
		(status === 'fulfilled' && event.key === 'Tab')
	) {
		event.preventDefault();
	}

	setEventKeyCode(event.code);
};

export default handleKeyDown;
