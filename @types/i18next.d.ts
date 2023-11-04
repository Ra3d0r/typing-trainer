import 'i18next';

import langEn from '../locales/en/translation.json';
import langRu from '../locales/ru/translation.json';

declare module 'i18next' {
	interface CustomTypeOptions {
		resources: {
			en: typeof langEn;
			ru: typeof langRu;
		};
		defaultNS: 'main';
		ns: ['main'];
	}
}
