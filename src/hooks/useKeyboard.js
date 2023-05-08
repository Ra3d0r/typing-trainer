import {useEffect, useState} from 'react';

const useKeyboard = () => {
	const [isShift, setIsShift] = useState(false);
	const [eventKeyCode, setEventKeyCode] = useState('');

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
		}

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('keyup', handleKeyUp);
		};
	}, []);

	return [isShift, eventKeyCode];
};

export {useKeyboard};
