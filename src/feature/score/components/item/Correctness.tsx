import {typeModeUnion} from '@types';

import {useAppSelector} from '@store/redux-hooks';

import Indicator from '@components/score/Indicator';

import {selectCorrectness} from '../../scoreSelectors';

const Svg = () => {
	return (
		<svg
			className="w-4 h-4"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 16 12"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M1 5.917 5.724 10.5 15 1.5"
			/>
		</svg>
	);
};

const Correctness = ({mode}: {mode: typeModeUnion}) => {
	const correctness = useAppSelector((state) => selectCorrectness(state, mode));

	return <Indicator value={correctness} svg={<Svg />} text="Correctness" measure="%" />;
};

export default Correctness;
