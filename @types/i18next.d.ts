import 'i18next';

import langEn from '../locales/en/translation.json';

declare module 'i18next' {
	interface CustomTypeOptions {
		resources: {
			translation: typeof langEn;
		};
		defaultNS: 'translation';
		ns: ['translation'];
	}
}
