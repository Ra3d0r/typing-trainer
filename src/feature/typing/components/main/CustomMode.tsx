import React, {useState} from 'react';

import useCustomMode from '@hooks/useCustomMode';

import ModalAddText from '@components/modal/ModalAddText';

const CustomMode = () => {
	const [textAreaValue, setTextAreaValue] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
		setTextAreaValue(e.target.value);

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

export default CustomMode;
