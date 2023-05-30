import {useSelector} from 'react-redux';

import {selectAllScore} from '../../scoreSlice';

const TotalChars = ({mode}) => {
	const {totalChars} = useSelector((state) => selectAllScore(state, mode));

	return (
		<div>
			<p>totalChars: {totalChars}</p>
		</div>
	);
};

export {TotalChars};
