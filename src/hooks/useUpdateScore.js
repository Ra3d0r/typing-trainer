import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {addTotalChars, reset} from '../feature/score/scoreSlice';
import {selectCurrentText} from '../feature/typing/typingSlice';

const useUpdateScore = (mode) => {
	const dispatch = useDispatch();

	const currentText = useSelector((state) => selectCurrentText(state, mode));
	const [previousTotalChars, setPreviousTotalChars] = useState(0);

	useEffect(() => {
		if (previousTotalChars !== currentText.length && previousTotalChars > 0) {
			dispatch(reset({mode}));
		}
		if (currentText.length) {
			setPreviousTotalChars(currentText.length);
			dispatch(addTotalChars({chars: currentText.length, mode}));
		}
	}, [currentText]);
};

export default useUpdateScore;
