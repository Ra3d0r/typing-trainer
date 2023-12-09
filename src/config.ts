import {IText} from './types';

const API_KEY_HARD = process.env['REACT_APP_API_HARD_ENG'];

const URL_EASY_ENG = 'https://type.fit/api/quotes';
const URL_NORMAL_ENG = 'https://dummyjson.com/posts';
const URL_HARD_END = 'https://api.api-ninjas.com/v1/exercises';

const URL_EASY_RU = 'https://api.anilibria.tv/v2/getChanges';
const URL_NORMAL_RU = 'https://api.anilibria.tv/v2/getUpdates';
const URL_HARD_RU = 'https://api.anilibria.tv/v2/getUpdates';

const textEng: IText = {
	url: {
		easy: URL_EASY_ENG,
		normal: URL_NORMAL_ENG,
		hard: URL_HARD_END,
	},
	TextsByKey: {
		easy: null,
		normal: 'posts',
		hard: null,
	},
	textKey: {
		easy: 'text',
		normal: 'body',
		hard: 'instructions',
	},
	headers: {
		hard: {
			'X-Api-Key': API_KEY_HARD,
		},
		normal: {},
		easy: {},
	},
};

const textRu: IText = {
	url: {
		easy: URL_EASY_RU,
		normal: URL_NORMAL_RU,
		hard: URL_HARD_RU,
	},
	TextsByKey: {
		easy: null,
		normal: null,
		hard: null,
	},
	textKey: {
		easy: 'ru',
		normal: 'description',
		hard: 'description',
	},
	headers: {
		hard: {},
		normal: {},
		easy: {},
	},
};

export {textEng, textRu};
