import {useState} from 'react';

import {typeModeUnion} from '@types';

import {selectAllInfoText} from '@feature/typing/typingSelectors';
import {selectUserAuth} from '@feature/user/userSelectors';

import handleKeyDown from '@helpers/handleKeyDown';
import handleKeyUp from '@helpers/handleKeyUp';

import {useAppDispatch, useAppSelector} from '@store/redux-hooks';

import useKeyboardEvent from './utils/useKeyboardEvent';

const useKeyboard = (target: string | undefined, mode: typeModeUnion): [boolean, string] => {
	const [isShiftPressed, setIsShiftPressed] = useState(false);
	const [eventKeyCode, setEventKeyCode] = useState('');
	const {allText, currentText, currentTextIndex, status, errorsIndex} = useAppSelector((state) =>
		selectAllInfoText(state, mode),
	);
	const isAuth = useAppSelector(selectUserAuth);
	const dispatch = useAppDispatch();

	useKeyboardEvent('keydown', (event: KeyboardEvent) =>
		handleKeyDown({event, setIsShiftPressed, setEventKeyCode, status}),
	);
	useKeyboardEvent('keyup', (event: KeyboardEvent) =>
		handleKeyUp({
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
		}),
	);

	return [isShiftPressed, eventKeyCode];
};

export default useKeyboard;
