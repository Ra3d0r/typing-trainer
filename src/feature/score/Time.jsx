import {useDispatch} from 'react-redux';

import {convertSecondsToDigitTime} from '../../helpers/convertSecondsToDigitTime';
import {useInterval} from '../../hooks/utils/useInterval';
import {updateTime} from './scoreSlice';

const Time = ({time, startingTime}) => {
	const dispatch = useDispatch();

	useInterval(
		() => {
			dispatch(updateTime());
		},
		1000,
		startingTime,
	);

	return (
		<div>
			<p>Time: {convertSecondsToDigitTime(time)}</p>
		</div>
	);
};

export {Time};
