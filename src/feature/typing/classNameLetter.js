const classNameLetter = (index, errorsIndex = [], currentTextIndex) => {
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

export {classNameLetter};
