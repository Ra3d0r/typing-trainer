import {typeStatus} from '@types';

export type typeReturnCustomMode = [
	status: typeStatus,
	addText: (
		textAreaValue: string,
		setTextAreaValue: React.Dispatch<React.SetStateAction<string>>,
		setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
	) => void,
	closeModal: () => void,
];

export type typeAddText = (
	textAreaValue: string,
	setTextAreaValue: React.Dispatch<React.SetStateAction<string>>,
	setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
) => void;
