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
		'!': 'Digit1',
		'@': 'Digit2',
		'#': 'Digit3',
		$: 'Digit4',
		'%': 'Digit5',
		'^': 'Digit6',
		'&': 'Digit7',
		'*': 'Digit8',
		'(': 'Digit9',
		')': 'Digit0',
		_: 'Minus',
		'+': 'Equal',
		'"': 'Quote',
		'<': 'Comma',
		'>': 'Period',
		'?': 'Slash',
		'{': 'BracketLeft',
		'}': 'BracketRight',
		'|': 'Backslash',
		backspace: 'Backspace',
		й: 'KeyQ',
		ц: 'KeyW',
		у: 'KeyE',
		к: 'KeyR',
		е: 'KeyT',
		н: 'KeyY',
		г: 'KeyU',
		ш: 'KeyI',
		щ: 'KeyO',
		з: 'KeyP',
		х: 'BracketLeft',
		ъ: 'BracketRight',
		'/\\': 'Backslash',
		ф: 'KeyA',
		ы: 'KeyS',
		в: 'KeyD',
		а: 'KeyF',
		п: 'KeyG',
		р: 'KeyH',
		о: 'KeyJ',
		л: 'KeyK',
		д: 'KeyL',
		ж: 'Semicolon',
		э: 'Quote',
		я: 'KeyZ',
		ч: 'KeyX',
		с: 'KeyC',
		м: 'KeyV',
		и: 'KeyB',
		т: 'KeyN',
		ь: 'KeyM',
		б: 'Comma',
		ю: 'Period',
		'//': 'Slash',
		'№': 'Digit3',
	};

	const result: string | undefined = keyId[key?.toLowerCase()];
	return result ? result : null;
};

export default keyIdButtons;
