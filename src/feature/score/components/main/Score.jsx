import {useUpdateScore} from '../../../../hooks/useUpdateScore';
import {Accuracy} from '../item/Accuracy';
import {Time} from '../item/Time';
import {TotalChars} from '../item/TotalChars';
import {Typos} from '../item/Typos';

const Score = ({mode}) => {
	useUpdateScore(mode);

	return (
		<div className="text-center text-blue-500">
			<Time mode={mode} />
			<Typos mode={mode} />
			<Accuracy mode={mode} />
			<TotalChars mode={mode} />
		</div>
	);
};

export {Score};
