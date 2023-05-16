import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {textEng} from '../config';
import {requestText, selectCurrentText} from '../feature/typing/typingSlice';

const useCurrentText = (mode) => {
	const dispatch = useDispatch();
	const currentText = useSelector((state) => selectCurrentText(state, mode));

	useEffect(() => {
		if (!currentText.length) {
			const config = {
				url: textEng.url[mode],
				mode,
				headers: textEng.headers[mode],
			};
			dispatch(requestText(config));
		}
	}, [dispatch]);

	return currentText;
};

export {useCurrentText};
