import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {nextLetter} from '../feature/typing/typingSlice';
import {keyIdButtons} from '../helpers/keyIdButtons';

const useKeyboard = (target) => {
	const [isShift, setIsShift] = useState(false);
	const [eventKeyCode, setEventKeyCode] = useState('');

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
				dispatch(nextLetter());
			}
		}

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('keyup', handleKeyUp);
		};
	}, [target]);

	return [isShift, eventKeyCode];
};

export {useKeyboard};
