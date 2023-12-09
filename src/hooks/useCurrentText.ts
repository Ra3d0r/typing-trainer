import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

import {typeLang, typeModeUnion} from 'src/types';

import {selectCurrentText} from '../feature/typing/typingSelectors';
import {requestText, typingActions} from '../feature/typing/typingSlice';
import {useAppDispatch, useAppSelector} from '../store/redux-hooks';

const {changeStatusCustomMode} = typingActions;

const useCurrentText = (mode: typeModeUnion): [string[], () => void] => {
	const dispatch = useAppDispatch();
	const {i18n} = useTranslation();
	const currentText = useAppSelector((state) => selectCurrentText(state, mode));

	const setStatusLoading = () => dispatch(changeStatusCustomMode('loading'));

	useEffect(() => {
		if (!currentText.length && mode !== 'custom') {
			dispatch(requestText({mode, lang: i18n.language as typeLang}));
		}
		// eslint-disable-next-line
	}, []);

	return [currentText, setStatusLoading];
};

export default useCurrentText;
