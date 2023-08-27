import {typeRandomTextFromArray} from './types/typeRandomTextFromArray';
import findValue from './utils/findValue';
import randomIntFromInterval from './utils/randomIntFromInterval';

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

		if (result === null) {
			throw new Error('Value not found by key');
		}

		throw new Error('Text for typing must been string');
	}

	if (Array.isArray(text)) {
		throw new Error(
			'The values in the array passed to the function argument must be a string or an object',
		);
	}

	if (key === null && typeof text === 'object') {
		throw new Error('Specify the key to the object');
	}

	if (text === undefined) {
		throw new Error(
			'The value at a random index in the array passed to the function is not received',
		);
	}

	throw new Error('There was an unforeseen error');
};

export default randomTextFromArray;
