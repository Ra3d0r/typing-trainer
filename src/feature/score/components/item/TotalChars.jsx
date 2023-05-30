import {useSelector} from 'react-redux';

import {selectTotalChars} from '../../scoreSlice';

const TotalChars = ({mode}) => {
	const totalChars = useSelector((state) => selectTotalChars(state, mode));

	return (
		<div>
			<p>totalChars: {totalChars}</p>
		</div>
	);
};

export {TotalChars};
