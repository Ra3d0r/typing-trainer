import {useEffect} from 'react';

import {typeModeUnion} from 'src/types';

import {textEng} from '../config';
import {selectCurrentText} from '../feature/typing/typingSelectors';
import {requestText, typingActions} from '../feature/typing/typingSlice';
import {useAppDispatch, useAppSelector} from '../store/redux-hooks';

const {changeStatusCustomMode} = typingActions;

const useCurrentText = (mode: typeModeUnion): [string[], () => void] => {
	const dispatch = useAppDispatch();
	const currentText = useAppSelector((state) => selectCurrentText(state, mode));

	const setStatusLoading = () => dispatch(changeStatusCustomMode('loading'));

	useEffect(() => {
		if (!currentText.length && mode !== 'custom') {
			const config = {
				url: textEng.url[mode],
				mode,
				headers: textEng.headers[mode],
			};
			dispatch(requestText(config));
		}
	});

	return [currentText, setStatusLoading];
};

export default useCurrentText;
