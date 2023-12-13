import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import langEn from '../locales/en/translation.json';
import langRu from '../locales/ru/translation.json';

i18n.use(initReactI18next).init({
	fallbackLng: 'en',
	debug: process.env['NODE_ENV'] === 'production' ? false : true,
	resources: {
		en: {translation: langEn},
		ru: {translation: langRu},
	},
	defaultNS: 'translation',
	ns: ['translation'],
});

export default i18n;
