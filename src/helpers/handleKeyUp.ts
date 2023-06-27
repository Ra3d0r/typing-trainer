import {increaseTypos} from '@feature/score/scoreSlice';
import {openToast} from '@feature/toast/toastSlice';
import {typingActions} from '@feature/typing/typingSlice';

import checkKeyboardLayout from './checkKeyboardLayout';
import keyIdButtons from './keyIdButtons';
import separationTextMode from './separationTextMode';
import {typeHandleKeyUp} from './types/typeHandleKeyUp';

const {addCurrentText, addErrorIndex, changeStatusCustomMode, nextLetter, resetCustomModeText} =
	typingActions;

const handleKeyUp: typeHandleKeyUp = ({
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

	if (!checkKeyboardLayout('en', event)) {
		dispatch(openToast({message: 'Change the keyboard layout', type: 'warning'}));
		return;
	}

	const TargetKeyId = keyIdButtons(event.key);
	if (!TargetKeyId) {
		return;
	}

	if (!currentText.length) {
		return;
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
