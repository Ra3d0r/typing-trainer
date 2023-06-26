import {useDispatch, useSelector} from 'react-redux';

import {selectTime, updateTime} from '../feature/score/scoreSlice';
import {selectCurrentTextIndex} from '../feature/typing/typingSelectors';
import millisecondsToDigitTime from '../helpers/millisecondsToDigitTime';
import useInterval from './utils/useInterval';

const useTime = (mode) => {
	const time = useSelector((state) => selectTime(state, mode));
	const dispatch = useDispatch();
	const currentTextIndex = useSelector((state) => selectCurrentTextIndex(state, mode));

	useInterval(
		() => {
			dispatch(updateTime({mode}));
		},
		1000,
		currentTextIndex > 0,
	);

	return millisecondsToDigitTime(time);
};

export default useTime;
