import {increaseTypos} from '@feature/score/scoreSlice';
import {toastActions} from '@feature/toast/toastSlice';
import {typingActions} from '@feature/typing/typingSlice';

import {textEng} from '../config';
import checkKeyboardLayout from './checkKeyboardLayout';
import keyIdButtons from './keyIdButtons';
import randomTextFromArray from './randomTextFromArray';
import {typeHandleKeyUp} from './types/typeHandleKeyUp';

const {addCurrentText, addErrorIndex, changeStatusCustomMode, nextLetter, resetCustomModeText} =
	typingActions;

const {openToast} = toastActions;

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

	const {textKey} = textEng;

	if (currentTextIndex < currentText.length - 1) {
		dispatch(nextLetter({mode}));
		return;
	}

	if (mode !== 'custom') {
		const text = randomTextFromArray(allText, mode, textKey);
		dispatch(addCurrentText({text, mode}));
		return;
	}

	throw new Error('Incorrect next text or letter');
};

export default handleKeyUp;
