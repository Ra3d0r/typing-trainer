import {increaseTypos} from '../feature/score/scoreSlice';
import {
	addCurrentText,
	addErrorIndex,
	changeStatusCustomMode,
	nextLetter,
	resetCustomModeText,
} from '../feature/typing/typingSlice';
import checkKeyboardLayout from './checkKeyboardLayout';
import keyIdButtons from './keyIdButtons';
import separationTextMode from './separationTextMode';

const handleKeyUp = ({
	event,
	setIsShiftPressed,
	setEventKeyCode,
	target,
	dispatch,
	currentText,
	currentTextIndex,
	mode,
	allText,
}) => {
	if (event.key === 'Shift') {
		setIsShiftPressed(false);
	}

	setEventKeyCode('');

	const TargetKeyId = keyIdButtons(event.key);
	if (!TargetKeyId) {
		return;
	}

	if (!currentText.length) {
		return;
	}

	if (checkKeyboardLayout('en', event)) {
		//
	}

	if (target !== event.key) {
		dispatch(addErrorIndex({currentTextIndex, mode}));
		dispatch(increaseTypos({mode}));
	}

	if (mode === 'custom' && currentTextIndex === currentText.length - 1) {
		dispatch(changeStatusCustomMode('idle'));
		dispatch(resetCustomModeText());
		return;
	}

	if (currentTextIndex < currentText.length - 1) {
		dispatch(nextLetter({mode}));
	} else {
		const text = separationTextMode(allText, mode, false);
		dispatch(addCurrentText({text, mode}));
	}
};

export default handleKeyUp;
