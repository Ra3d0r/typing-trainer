import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {addCurrentText, addErrorIndex, nextLetter} from '../feature/typing/typingSlice';
import {keyIdButtons} from '../helpers/keyIdButtons';

const useKeyboard = (target) => {
	const [isShift, setIsShift] = useState(false);
	const [eventKeyCode, setEventKeyCode] = useState('');

	const currentTextIndex = useSelector((state) => state.typing.entities.easy.currentTextIndex);
	const currentTextLength = useSelector((state) => state.typing.entities.easy.currentText?.length);
	const allText = useSelector((state) => state.typing.entities.easy.allText);
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
				target !== event.key && dispatch(addErrorIndex());
				currentTextIndex < currentTextLength - 1
					? dispatch(nextLetter())
					: dispatch(addCurrentText(allText));
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

export {useKeyboard};
