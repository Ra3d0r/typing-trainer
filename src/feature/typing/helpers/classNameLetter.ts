import {typeChart} from '../types/typesChart';

const classNameLetter = (
	index: number,
	errorsIndex: Record<number, 'error'> = {},
	currentTextIndex: number,
): typeChart => {
	if (index in errorsIndex) {
		return 'mis-letter';
	} else if (index === currentTextIndex) {
		return 'current-letter';
	} else if (index < currentTextIndex) {
		return 'great-letter';
	} else {
		return 'untyped-letter';
	}
};

export default classNameLetter;
