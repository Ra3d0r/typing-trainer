const handleKeyDown = ({event, setIsShiftPressed, setEventKeyCode}) => {
	if (event.key === 'Shift') {
		setIsShiftPressed(true);
	}

	if (event.code === 'Space' || event.key === 'Alt' || event.key === 'Tab') {
		event.preventDefault();
	}

	setEventKeyCode(event.code);
};

export {handleKeyDown};
