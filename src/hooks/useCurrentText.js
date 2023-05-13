import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {URL_QUOTES} from '../config';
import {requestText} from '../feature/typing/typingSlice';

const useCurrentText = () => {
	const dispatch = useDispatch();
	const currentText = useSelector((state) => state.typing.entities.easy.currentText);

	useEffect(() => {
		if (!currentText.length) {
			dispatch(requestText(URL_QUOTES));
		}
	}, [dispatch]);

	return currentText;
};

export {useCurrentText};
