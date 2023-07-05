import {selectTypingStatus} from '@feature/typing/typingSelectors';
import {typingActions} from '@feature/typing/typingSlice';

import {useAppDispatch, useAppSelector} from '@store/redux-hooks';

import {typeAddText, typeReturnCustomMode} from './types/typeCustomMode';

const {changeStatusCustomMode, addCurrentText} = typingActions;

const useCustomMode = (): typeReturnCustomMode => {
	const dispatch = useAppDispatch();
	const status = useAppSelector((state) => selectTypingStatus(state, 'custom'));

	const closeModal = () => dispatch(changeStatusCustomMode('idle'));

	const addText: typeAddText = (textAreaValue, setTextAreaValue, setErrorMessage) => {
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
