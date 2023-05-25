import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
	reset,
	updateAccuracy,
	updateTime,
	updateTotalChars,
	updateTypos,
} from '../feature/score/scoreSlice';
import {selectAllInfoText} from '../feature/typing/typingSlice';

const getCurrentTime = () => new Date().getTime();
const digitTime = (seconds) => {
	const date = new Date(seconds);
	const options = {minute: '2-digit', second: '2-digit'};
	return date.toLocaleTimeString([], options);
};

const useScore = (mode) => {
	const dispatch = useDispatch();

	const {currentText, currentTextIndex} = useSelector((state) => selectAllInfoText(state, mode));
	const [startTime, setStartTime] = useState(null);
	const [previousTotalChars, setPreviousTotalChars] = useState(0);

	useEffect(() => {
		if (currentTextIndex > 0 && !startTime) {
			setPreviousTotalChars(currentText.length);
			setStartTime(getCurrentTime());
		}

		if (startTime) {
			const secondsBefore = getCurrentTime() - startTime;

			dispatch(updateTime(digitTime(secondsBefore)));
		}
	}, [currentTextIndex, startTime]);

	useEffect(() => {
		if (previousTotalChars !== currentText.length && previousTotalChars > 0) {
			dispatch(reset());
			setStartTime(null);
		}
		dispatch(updateTotalChars(currentText.length));
	}, [currentText]);
};

export {useScore};
