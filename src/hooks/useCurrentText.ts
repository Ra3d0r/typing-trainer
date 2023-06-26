import {useEffect} from 'react';
import {typeModeUnion} from 'src/types';

import {textEng} from '../config';
import {selectCurrentText} from '../feature/typing/typingSelectors';
import {changeStatusCustomMode, requestText} from '../feature/typing/typingSlice';
import {useAppDispatch, useAppSelector} from '../store/redux-hooks';

const useCurrentText = (mode: typeModeUnion) => {
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
	}, [dispatch]);

	return [currentText, setStatusLoading];
};

export default useCurrentText;
