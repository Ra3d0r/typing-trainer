const classNameKey = (id, eventKey, keyTarget) => {
	switch (true) {
		case eventKey === keyTarget && id === eventKey:
			return 'target-typed';

		case id === 'ShiftLeft' && id === eventKey:
		case id === 'ShiftRight' && id === eventKey:
		case id === 'Backspace' && id === eventKey:
			return 'special';

		case id === eventKey:
			return 'mis-typed';
		case id === keyTarget:
			return 'target';

		default:
			return 'untyped';
	}
};

export {classNameKey};
