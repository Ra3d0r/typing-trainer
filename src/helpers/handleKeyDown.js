export const handleKeyDown = ({event, setIsShiftPressed, setEventKeyCode}) => {
	if (event.key === 'Shift') {
		setIsShiftPressed(true);
	}

	setEventKeyCode(event.code);
};
