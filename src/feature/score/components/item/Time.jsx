import {useDispatch, useSelector} from 'react-redux';

import {millisecondsToDigitTime} from '../../../../helpers/millisecondsToDigitTime';
import {useInterval} from '../../../../hooks/utils/useInterval';
import {selectCurrentTextIndex} from '../../../typing/typingSlice';
import {selectTime, updateTime} from '../../scoreSlice';

const Time = ({mode}) => {
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

	return (
		<div>
			<p>Time: {millisecondsToDigitTime(time)}</p>
		</div>
	);
};

export {Time};
