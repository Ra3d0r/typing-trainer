import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
	addCurrentText,
	addErrorIndex,
	nextLetter,
	selectAllText,
	selectCurrentText,
	selectCurrentTextIndex,
} from '../feature/typing/typingSlice';
import {keyIdButtons} from '../helpers/keyIdButtons';
import {randomIntFromInterval} from '../helpers/randomIntFromInterval';

const useKeyboard = (target, mode) => {
	const [isShift, setIsShift] = useState(false);
	const [eventKeyCode, setEventKeyCode] = useState('');

	const currentTextIndex = useSelector((state) => selectCurrentTextIndex(state, mode));
	const currentText = useSelector((state) => selectCurrentText(state, mode));
	const allText = useSelector((state) => selectAllText(state, mode));
	const dispatch = useDispatch();

	useEffect(() => {
		function handleKeyDown(event) {
			if (event.key === 'Shift') {
				setIsShift(true);
			}

			setEventKeyCode(event.code);
		}

		function handleKeyUp(event) {
			if (event.key === 'Shift') {
				setIsShift(false);
			}

			setEventKeyCode('');

			const keyId = keyIdButtons(event.key);
			if (keyId) {
				conditionText({
					key: event.key,
					target,
					dispatch,
					addErrorIndex,
					addCurrentText,
					nextLetter,
					currentText,
					currentTextIndex,
					mode,
					allText,
				});
			}
		}

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('keyup', handleKeyUp);
		};
	}, [target]);

	return [isShift, eventKeyCode, keyIdButtons(target)];
};

function conditionText({
	key,
	target,
	dispatch,
	addErrorIndex,
	addCurrentText,
	nextLetter,
	currentText,
	currentTextIndex,
	mode,
	allText,
}) {
	if (target !== key) {
		dispatch(addErrorIndex(currentTextIndex));
	}

	if (mode === 'custom' && currentTextIndex === currentText.length - 1) {
		// TODO Написать логику для этого режима
	}

	if (currentTextIndex < currentText.length - 1) {
		dispatch(nextLetter());
	} else {
		const randomNumber = randomIntFromInterval(0, allText?.length);
		mode !== 'custom' && dispatch(addCurrentText(allText[randomNumber].text));
	}
}

export {useKeyboard};
