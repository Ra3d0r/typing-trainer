export interface ItextItem {
	letter: string;
	index: number;
	errorsIndex: number[];
	currentTextIndex: number;
}

export interface ItextList {
	errorsIndex: number[];
	currentText: string[];
	currentTextIndex: number;
}
