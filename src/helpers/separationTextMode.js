import {textEng} from '../config';
import {randomIntFromInterval} from './randomIntFromInterval';

export const separationTextMode = (text, mode, isFromApi = true) => {
	const {textKey, TextsByKey} = textEng;
	if (isFromApi) {
		const allText = findKey(text, TextsByKey[mode]);
		const randomNumberByApi = randomIntFromInterval(0, allText.length);
		return [allText, findKey(allText[randomNumberByApi], textKey[mode])];
	}
	const randomNumber = randomIntFromInterval(0, text.length);
	return findKey(text[randomNumber], textKey[mode]);
};

function findKey(obj, key) {
	if (key === null || key === undefined) {
		return obj;
	}

	if (obj === null) {
		return null;
	}

	let result = null;
	let found = false;

	function search(obj) {
		if (found) {
			return;
		}

		if (obj.hasOwnProperty(key)) {
			result = obj[key];
			found = true;
			return;
		}

		for (const prop in obj) {
			if (typeof obj[prop] === 'object') {
				search(obj[prop]);
			}
		}
	}

	search(obj);
	return result;
}
