import {keyIdButtons} from './keyIdButtons';
import {separationTextMode} from './separationTextMode';

export const handleKeyUp = ({
	event,
	setIsShiftPressed,
	setEventKeyCode,
	target,
	dispatch,
	addErrorIndex,
	addCurrentText,
	nextLetter,
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
	if (target !== event.key) {
		dispatch(addErrorIndex({currentTextIndex, mode}));
	}

	if (mode === 'custom' && currentTextIndex === currentText.length - 1) {
		// TODO Написать логику для этого режима
	}

	if (currentTextIndex < currentText.length - 1) {
		dispatch(nextLetter({mode}));
	} else {
		const text = separationTextMode(allText, mode, false);
		mode !== 'custom' && dispatch(addCurrentText({text, mode}));
	}
};
