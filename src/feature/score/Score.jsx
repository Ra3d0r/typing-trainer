import {useSelector} from 'react-redux';

import {useScore} from '../../hooks/useScore';

const Score = ({mode}) => {
	useScore(mode);
	const {accuracy, typos, time, totalChars} = useSelector((state) => state.score);

	return (
		<div className="text-center text-blue-500">
			accuracy: {accuracy}, typos: {typos} time: {time} totalChars: {totalChars}
		</div>
	);
};

export {Score};
