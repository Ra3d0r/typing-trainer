import {typeChart} from '../types/typesChart';

const classNameLetter = (
	index: number,
	errorsIndex: number[] = [],
	currentTextIndex: number,
): typeChart => {
	if (errorsIndex.includes(index)) {
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
