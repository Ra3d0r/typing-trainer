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

	const addText = (textAreaValue, setTextAreaValue, setErrorMessage) => {
		if (!textAreaValue) {
			setErrorMessage('Enter the text');
			return;
		}
		dispatch(addCurrentText({text: textAreaValue.trim(), mode: 'custom'}));
		dispatch(changeStatusCustomMode('fulfilled'));
		setTextAreaValue('');
		setErrorMessage('');
	};
	return [status, addText, closeModal];
};

export default useCustomMode;
