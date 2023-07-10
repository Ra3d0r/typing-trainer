const keyIdButtons = (key: string | undefined): string | null => {
	if (key === undefined) {
		return null;
	}
	const keyId: Record<string, string> = {
		'`': 'Backquote',
		1: 'Digit1',
		2: 'Digit2',
		3: 'Digit3',
		4: 'Digit4',
		5: 'Digit5',
		6: 'Digit6',
		7: 'Digit7',
		8: 'Digit8',
		9: 'Digit9',
		0: 'Digit0',
		'-': 'Minus',
		'=': 'Equal',
		q: 'KeyQ',
		w: 'KeyW',
		e: 'KeyE',
		r: 'KeyR',
		t: 'KeyT',
		y: 'KeyY',
		u: 'KeyU',
		i: 'KeyI',
		o: 'KeyO',
		p: 'KeyP',
		'[': 'BracketLeft',
		']': 'BracketRight',
		'\\': 'Backslash',
		a: 'KeyA',
		s: 'KeyS',
		d: 'KeyD',
		f: 'KeyF',
		g: 'KeyG',
		h: 'KeyH',
		j: 'KeyJ',
		k: 'KeyK',
		l: 'KeyL',
		';': 'Semicolon',
		':': 'Semicolon',
		"'": 'Quote',
		z: 'KeyZ',
		x: 'KeyX',
		c: 'KeyC',
		v: 'KeyV',
		b: 'KeyB',
		n: 'KeyN',
		m: 'KeyM',
		',': 'Comma',
		'.': 'Period',
		'/': 'Slash',
		' ': 'Space',
		tab: 'Tab',
	};

	const result: string | undefined = keyId[key?.toLowerCase()];
	return result ? result : null;
};

export default keyIdButtons;