export const classNameLetter = (index, errorIndex = [], currentTextIndex) => {
	if (errorIndex.includes(index)) {
		return 'mis-letter';
	} else if (index === currentTextIndex) {
		return 'current-letter';
	} else if (index < currentTextIndex) {
		return 'great-letter';
	} else {
		return 'untyped-letter';
	}
};
