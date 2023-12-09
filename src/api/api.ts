import arrayTexts from '@helpers/arrayTexts';
import randomTextFromArray from '@helpers/randomTextFromArray';

import {textEng, textRu} from '../config';
import client from './client';
import {dataLoadingText, typeLoadText} from './types/typeApi';

export const loadText: typeLoadText = async (mode, lang) => {
	try {
		const {TextsByKey, url, headers, textKey} = lang === 'en' ? textEng : textRu;
		const head = headers[mode];

		const data: dataLoadingText = await client.get(url[mode], {headers: head});
		const allText = arrayTexts(data, mode, TextsByKey);
		const text = randomTextFromArray(allText, mode, textKey);

		return [allText, text];
	} catch (err) {
		console.error(err);
		return Promise.reject(err);
	}
};
