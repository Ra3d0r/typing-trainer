import {typeArrayTexts} from './types/typeArrayTexts';
import findValue from './utils/findValue';

const arrayTexts: typeArrayTexts = (object, mode, TextsByKey) => {
	const key: null | string | undefined = TextsByKey[mode];
	if (key === undefined) {
		throw new Error(
			'The game mode does not match the key of the object written in the config file.',
		);
	}
	if (key === null && Array.isArray(object)) {
		return object;
	}

	if (typeof object === 'object' && typeof key === 'string' && !Array.isArray(object)) {
		const res: unknown = findValue(object, key);
		if (Array.isArray(res)) {
			return res;
		}
	}

	throw new Error(
		'Will not find the key written in config.ts in the data object received from the server',
	);
};

export default arrayTexts;
