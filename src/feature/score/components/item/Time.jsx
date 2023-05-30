import {useTime} from '../../../../hooks/useTime';

const Time = ({mode}) => {
	const time = useTime(mode);

	return (
		<div>
			<p>Time: {time}</p>
		</div>
	);
};

export {Time};
