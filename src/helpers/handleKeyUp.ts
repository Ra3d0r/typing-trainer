import {scoreActions} from '@feature/score/scoreSlice';
import {toastActions} from '@feature/toast/toastSlice';
import {typingActions} from '@feature/typing/typingSlice';
import postScore from '@feature/userScore/postScore';

import {textEng} from '../config';
import keyIdButtons from './keyIdButtons';
import randomTextFromArray from './randomTextFromArray';
import {typeHandleKeyUp} from './types/typeHandleKeyUp';
import checkKeyboardLayout from './utils/checkKeyboardLayout';

const {
	addCurrentText,
	addErrorIndex,
	changeStatusCustomMode,
	nextLetter,
	resetCustomModeText,
	previousLetter,
} = typingActions;

const {openToast} = toastActions;

const {increaseTypos, updateCorrectness} = scoreActions;

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
	isAuth,
	errorsIndex,
}) => {
	if (event.key === 'Shift') {
		setIsShiftPressed(false);
	}

	setEventKeyCode('');

	if (!checkKeyboardLayout('en', event.key)) {
		dispatch(openToast({message: 'Change the keyboard layout', type: 'warning'}));
		return;
	}

	if (!target) {
		return;
	}

	const TargetKeyId = keyIdButtons(event.key);
	if (!TargetKeyId) {
		return;
	}

	if (!currentText.length) {
		return;
	}

	if (event.key === 'Backspace') {
		dispatch(previousLetter({mode, currentTextIndex}));
		dispatch(updateCorrectness({mode, errorsIndex, currentTextIndex}));
		return;
	}

	if (target !== event.key) {
		dispatch(addErrorIndex({currentTextIndex, mode}));
		dispatch(increaseTypos({mode}));
		dispatch(updateCorrectness({mode, errorsIndex, currentTextIndex, isIncreaseTypos: true}));
	}

	if (mode === 'custom' && currentTextIndex === currentText.length - 1) {
		isAuth && dispatch(postScore({mode}));
		dispatch(changeStatusCustomMode('idle'));
		dispatch(resetCustomModeText());
		return;
	}

	if (currentTextIndex < currentText.length - 1) {
		dispatch(nextLetter({mode}));
		return;
	}

	if (mode !== 'custom') {
		const text = randomTextFromArray(allText, mode, textEng.textKey);
		isAuth && dispatch(postScore({mode}));
		dispatch(addCurrentText({text, mode}));
		return;
	}

	throw new Error('Incorrect next text or letter');
};

export default handleKeyUp;
