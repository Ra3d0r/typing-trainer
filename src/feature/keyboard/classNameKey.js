export const classNameKey = (id, eventKey, keyTarget) => {
	let className = '';
	switch (true) {
		case eventKey === keyTarget && id === eventKey:
			className = 'typed';
			break;

		case id === 'ShiftLeft' && id === eventKey:
			className = 'special';
			break;
		case id === 'ShiftRight' && id === eventKey:
			className = 'special';
			break;

		case id === eventKey:
			className = 'mis-typed';
			break;
		case id === keyTarget:
			className = 'active';
			break;

		default:
			className = 'untyped';
	}

	return className;
};
