import {typeHandleKeyUp} from './types/typeHandleKeyUp';

const handleKeyUp: typeHandleKeyUp = ({event, setIsShiftPressed, setEventKeyCode}) => {
	if (event.key === 'Shift') {
		setIsShiftPressed(false);
	}

	setEventKeyCode('');
};

export default handleKeyUp;
