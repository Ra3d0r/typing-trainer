import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {addTotalChars, reset} from '../feature/score/scoreSlice';
import {selectCurrentText} from '../feature/typing/typingSelectors';

const useUpdateScore = (mode) => {
	const dispatch = useDispatch();

	const currentText = useSelector((state) => selectCurrentText(state, mode));
	const previousTotalCharsRef = useRef(0);

	useEffect(() => {
		if (previousTotalCharsRef.current !== currentText.length && previousTotalCharsRef.current > 0) {
			dispatch(reset({mode}));
		}
		if (currentText.length) {
			previousTotalCharsRef.current = currentText.length;
			dispatch(addTotalChars({chars: currentText.length, mode}));
		}
	}, [currentText]);
};

export default useUpdateScore;
