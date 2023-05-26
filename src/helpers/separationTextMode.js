import {textEng} from '../config';
import {findKey} from './findKey';
import {randomIntFromInterval} from './randomIntFromInterval';

const separationTextMode = (text, mode, isFromApi = true) => {
	const {textKey, TextsByKey} = textEng;
	if (isFromApi) {
		const allText = findKey(text, TextsByKey[mode]);
		const randomNumberByApi = randomIntFromInterval(0, allText.length);
		return [allText, findKey(allText[randomNumberByApi], textKey[mode])];
	}
	const randomNumber = randomIntFromInterval(0, text.length);
	return findKey(text[randomNumber], textKey[mode]);
};

export {separationTextMode};
