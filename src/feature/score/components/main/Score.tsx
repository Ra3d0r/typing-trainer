import tw from 'twin.macro';

import {typeModeUnion} from '@types';

import useUpdateScore from '@hooks/useUpdateScore';

import Accuracy from '../item/Accuracy';
import Correctness from '../item/Correctness';
import Time from '../item/Time';
import TotalChars from '../item/TotalChars';
import Typos from '../item/Typos';

const Container = ({children}: {children: React.ReactNode}) => {
	return (
		<div
			css={tw`text-center text-blue-500 flex gap-x-6 sm:gap-x-10 justify-center flex-wrap gap-y-6`}
		>
			{children}
		</div>
	);
};

const Score = ({mode}: {mode: typeModeUnion}) => {
	useUpdateScore(mode);

	return (
		<Container>
			<Accuracy mode={mode} />
			<Time mode={mode} />
			<Typos mode={mode} />
			<TotalChars mode={mode} />
			<Correctness mode={mode} />
		</Container>
	);
};

export default Score;
