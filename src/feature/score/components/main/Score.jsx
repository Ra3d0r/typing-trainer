import {useSelector} from 'react-redux';

import {useUpdateScore} from '../../../../hooks/useUpdateScore';
import {selectCurrentTextIndex} from '../../../typing/typingSlice';
import {selectAllScore} from '../../scoreSlice';
import {Time} from '../item/Time';
import {Typos} from '../item/Typos';

const Score = ({mode}) => {
	const {accuracy, typos, time, totalChars} = useSelector((state) => selectAllScore(state, mode));
	const currenIndex = useSelector((state) => selectCurrentTextIndex(state, mode));
	useUpdateScore(mode);

	return (
		<div className="text-center text-blue-500">
			accuracy: {accuracy}, typos: {typos} totalChars: {totalChars}
			<Time time={time} startingTime={currenIndex > 0} mode={mode} />
			<Typos mode={mode} />
		</div>
	);
};

export {Score};
