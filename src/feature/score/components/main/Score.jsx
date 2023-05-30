import {useSelector} from 'react-redux';

import {useUpdateScore} from '../../../../hooks/useUpdateScore';
import {selectCurrentTextIndex} from '../../../typing/typingSlice';
import {selectAllScore} from '../../scoreSlice';
import {Accuracy} from '../item/Accuracy';
import {Time} from '../item/Time';
import {TotalChars} from '../item/TotalChars';
import {Typos} from '../item/Typos';

const Score = ({mode}) => {
	const {accuracy, typos, time, totalChars} = useSelector((state) => selectAllScore(state, mode));
	const currenIndex = useSelector((state) => selectCurrentTextIndex(state, mode));
	useUpdateScore(mode);

	return (
		<div className="text-center text-blue-500">
			<Time time={time} startingTime={currenIndex > 0} mode={mode} />
			<Typos mode={mode} />
			<Accuracy mode={mode} />
			<TotalChars mode={mode} />
		</div>
	);
};

export {Score};
