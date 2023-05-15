import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {URL_QUOTES} from '../config';
import {requestText, selectCurrentText} from '../feature/typing/typingSlice';

const useCurrentText = (mode) => {
	const dispatch = useDispatch();
	const currentText = useSelector((state) => selectCurrentText(state, mode));

	useEffect(() => {
		if (!currentText.length) {
			dispatch(requestText(URL_QUOTES));
		}
	}, [dispatch]);

	return currentText;
};

export {useCurrentText};
