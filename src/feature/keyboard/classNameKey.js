export const classNameKey = (id, eventKey, keyTarget) => {
	let className = '';
	switch (true) {
		case eventKey === keyTarget && id === eventKey:
			className = 'target-typed';
			break;

		case id === 'ShiftLeft' && id === eventKey:
		case id === 'ShiftRight' && id === eventKey:
		case id === 'Backspace' && id === eventKey:
			className = 'special';
			break;

		case id === eventKey:
			className = 'mis-typed';
			break;
		case id === keyTarget:
			className = 'target';
			break;

		default:
			className = 'untyped';
	}

	return className;
};
