import {useDispatch} from 'react-redux';

import {millisecondsToDigitTime} from '../../../../helpers/millisecondsToDigitTime';
import {useInterval} from '../../../../hooks/utils/useInterval';
import {updateTime} from '../../scoreSlice';

const Time = ({time, startingTime, mode}) => {
	const dispatch = useDispatch();

	useInterval(
		() => {
			dispatch(updateTime({mode}));
		},
		1000,
		startingTime,
	);

	return (
		<div>
			<p>Time: {millisecondsToDigitTime(time)}</p>
		</div>
	);
};

export {Time};
