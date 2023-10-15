export interface ItextItem {
	letter: string;
	index: number;
	errorsIndex: Record<number, 'error'>;
	currentTextIndex: number;
}

export interface ItextList {
	errorsIndex: Record<number, 'error'>;
	currentText: string[];
	currentTextIndex: number;
}
