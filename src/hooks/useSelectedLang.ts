import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

import {typeLang} from '@types';

import {langActions} from '@feature/lang/langSlice';

import {useAppDispatch} from '@store/redux-hooks';

const {setLang} = langActions;

const useSelectedLang = () => {
	const {i18n} = useTranslation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const langStore = localStorage.getItem('lang');
		if (langStore) {
			i18n.changeLanguage(langStore);
			dispatch(setLang({lang: langStore as typeLang}));
		} else {
			localStorage.setItem('lang', 'en');
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (i18n.language) {
			localStorage.setItem('lang', i18n.language);
		}
	}, [i18n.language]);
};

export default useSelectedLang;
