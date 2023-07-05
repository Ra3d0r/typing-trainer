export interface IPropSModalAddText {
	closeModal: () => void;
	addText: () => void;
	textAreaValue: string;
	handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	errorMessage: string;
}
