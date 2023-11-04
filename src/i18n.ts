import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import langEn from '../locales/en/translation.json';
import langRu from '../locales/ru/translation.json';

i18n.use(initReactI18next).init({
	fallbackLng: 'en',
	debug: true,
	resources: {
		en: {main: langEn},
		ru: {main: langRu},
	},
	defaultNS: 'main',
	ns: ['main'],
});

export default i18n;
