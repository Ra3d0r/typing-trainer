import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectAllInfoText} from '../feature/typing/typingSlice';
import {handleKeyDown} from '../helpers/handleKeyDown';
import {handleKeyUp} from '../helpers/handleKeyUp';
import {useKeyboardEvent} from './utils/useKeyboardEvent';

const useKeyboard = (target, mode) => {
	const [isShiftPressed, setIsShiftPressed] = useState(false);
	const [eventKeyCode, setEventKeyCode] = useState('');
	const {allText, currentText, currentTextIndex} = useSelector((state) =>
		selectAllInfoText(state, mode),
	);
	const dispatch = useDispatch();

	useKeyboardEvent('keydown', (event) =>
		handleKeyDown({event, setIsShiftPressed, setEventKeyCode}),
	);
	useKeyboardEvent('keyup', (event) =>
		handleKeyUp({
			event,
			setIsShiftPressed,
			setEventKeyCode,
			target,
			dispatch,
			currentText,
			currentTextIndex,
			mode,
			allText,
		}),
	);

	return [isShiftPressed, eventKeyCode];
};

export {useKeyboard};
