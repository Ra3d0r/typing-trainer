import {useDispatch, useSelector} from 'react-redux';

import {
	addCurrentText,
	changeStatusCustomMode,
	selectTypingStatus,
} from '../feature/typing/typingSlice';

const useCustomMode = () => {
	const dispatch = useDispatch();
	const status = useSelector((state) => selectTypingStatus(state, 'custom'));

	const closeModal = () => dispatch(changeStatusCustomMode('idle'));

	const addText = () => {
		const textArea = document.getElementById('text');
		const text = textArea.value.trim();
		const errorElement = document.getElementById('error');

		if (!text) {
			errorElement.textContent = 'Enter the text';
			return;
		}

		dispatch(addCurrentText({text, mode: 'custom'}));
		dispatch(changeStatusCustomMode('fulfilled'));

		textArea.value = '';
		errorElement.textContent = '';
	};
	return [status, addText, closeModal];
};

export {useCustomMode};
