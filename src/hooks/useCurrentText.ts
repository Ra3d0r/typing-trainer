import {useEffect} from 'react';

import {typeModeUnion} from 'src/types';

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
			dispatch(requestText({mode}));
		}
		// eslint-disable-next-line
	}, []);

	return [currentText, setStatusLoading];
};

export default useCurrentText;
