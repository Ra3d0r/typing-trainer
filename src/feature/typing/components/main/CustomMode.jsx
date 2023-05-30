import {useState} from 'react';

import {ModalAddText} from '../../../../components/modal/ModalAddText';
import {useCustomMode} from '../../../../hooks/useCustomMode.js';

const CustomMode = () => {
	const [textAreaValue, setTextAreaValue] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const handleChange = (e) => setTextAreaValue(e.target.value);

	const [status, addText, closeModal] = useCustomMode();
	return (
		status === 'loading' && (
			<ModalAddText
				closeModal={closeModal}
				addText={() => addText(textAreaValue, setTextAreaValue, setErrorMessage)}
				textAreaValue={textAreaValue}
				handleChange={handleChange}
				errorMessage={errorMessage}
			/>
		)
	);
};

export {CustomMode};
