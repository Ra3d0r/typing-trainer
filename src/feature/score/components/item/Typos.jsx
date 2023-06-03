import {useSelector} from 'react-redux';

import Indicator from '../../../../components/score/Indicator';
import {selectTypos} from '../../scoreSlice';

const Svg = () => {
	return (
		<svg
			data-darkreader-inline-stroke
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			className="w-6 h-6"
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	);
};

const Typos = ({mode}) => {
	const typos = useSelector((state) => selectTypos(state, mode));
	return <Indicator value={typos} svg={<Svg />} text="Typos" />;
};

export default Typos;
