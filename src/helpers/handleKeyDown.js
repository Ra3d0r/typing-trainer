const handleKeyDown = ({event, setIsShiftPressed, setEventKeyCode, status}) => {
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

export {handleKeyDown};
