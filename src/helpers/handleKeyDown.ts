import {t} from 'i18next';

import {scoreActions} from '@feature/score/scoreSlice';
import {toastActions} from '@feature/toast/toastSlice';
import {typingActions} from '@feature/typing/typingSlice';
import postScore from '@feature/userScore/postScore';

import {textEng, textRu} from '../config';
import keyIdButtons from './keyIdButtons';
import randomTextFromArray from './randomTextFromArray';
import typeHandleKeyDown from './types/typeHandleKeyDown';
import checkKeyboardLayout from './utils/checkKeyboardLayout';
import deleteWords from './utils/deleteWords';

const {openToast} = toastActions;

const {increaseTypos, updateCorrectness} = scoreActions;

const {
	addCurrentText,
	addErrorIndex,
	changeStatusCustomMode,
	nextLetter,
	resetCustomModeText,
	previousLetter,
} = typingActions;

const handleKeyDown: typeHandleKeyDown = ({
	event,
	setIsShiftPressed,
	setEventKeyCode,
	status,
	target,
	dispatch,
	currentText,
	currentTextIndex,
	mode,
	allText,
	isAuth,
	errorsIndex,
	lang,
}) => {
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

	if (!checkKeyboardLayout(lang, event.key)) {
		dispatch(openToast({message: t('changeKeyboard'), type: 'warning'}));
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
		isAuth && dispatch(postScore({mode, lang}));
		dispatch(changeStatusCustomMode('idle'));
		dispatch(resetCustomModeText());
		return;
	}

	if (currentTextIndex < currentText.length - 1) {
		dispatch(nextLetter({mode}));
		return;
	}

	if (mode !== 'custom') {
		const text = randomTextFromArray(
			allText,
			mode,
			lang === 'en' ? textEng.textKey : textRu.textKey,
		);
		isAuth && dispatch(postScore({mode, lang}));
		const changedText = lang === 'ru' ? deleteWords(text, '\r') : text;
		dispatch(addCurrentText({text: changedText, mode}));
		return;
	}

	throw new Error('Incorrect next text or letter');
};

export default handleKeyDown;
