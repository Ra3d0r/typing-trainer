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

		if (res === null) {
			throw new Error('Value not found by key');
		}

		throw new Error('Data by key must be an array');
	}

	if (typeof object === 'object' && key === null) {
		throw new Error('Specify the key to the object receive from API');
	}

	throw new Error(
		"There's been an unforeseen error. Check if the config.ts file is filled in correctly",
	);
};

export default arrayTexts;
