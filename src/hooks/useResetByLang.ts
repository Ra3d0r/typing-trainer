import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';

import {typeLang, typeModeUnion} from '@types';

import {selectLang} from '@feature/lang/langSelectors';
import {langActions} from '@feature/lang/langSlice';
import {scoreActions} from '@feature/score/scoreSlice';
import {requestText} from '@feature/typing/typingSlice';

import {useAppDispatch} from '@store/redux-hooks';

const {setLang} = langActions;
const {reset} = scoreActions;

const useResetByLang = (mode: typeModeUnion | undefined) => {
	const {i18n} = useTranslation();
	const dispatch = useAppDispatch();
	const lang = useSelector(selectLang);
	useEffect(() => {
		if (!mode) {
			return;
		}

		if (lang !== i18n.language && mode !== 'custom') {
			dispatch(reset({mode}));
			dispatch(requestText({mode, lang: i18n.language as typeLang}));
			dispatch(setLang({lang: i18n.language as typeLang}));
		}
		// eslint-disable-next-line
	}, [i18n.language]);
};

export default useResetByLang;
