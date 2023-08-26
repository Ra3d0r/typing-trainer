import findValue from './findValue';
import randomIntFromInterval from './randomIntFromInterval';
import {typeRandomTextFromArray} from './types/typeRandomTextFromArray';

const randomTextFromArray: typeRandomTextFromArray = (array, mode, textKey) => {
	const key: null | string | undefined = textKey[mode];
	if (key === undefined) {
		throw new Error(
			'The game mode does not match the key of the object written in the config file.',
		);
	}

	const randomNumber = randomIntFromInterval(0, array.length - 1);
	const text = array[randomNumber];

	if (key === null && typeof text === 'string') {
		return text;
	}

	if (typeof text === 'object' && typeof key === 'string') {
		const result: unknown = findValue(text, key);
		if (typeof result === 'string') {
			return result;
		}
		throw new Error('Text for typing must been string');
	}

	throw new Error('The text by key written in textKey in config.ts is not found');
};

export default randomTextFromArray;
