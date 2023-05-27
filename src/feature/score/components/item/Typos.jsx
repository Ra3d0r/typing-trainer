import {useSelector} from 'react-redux';

import {selectCurrentTypos} from '../../scoreSlice';

const Typos = ({mode}) => {
	const currentTypos = useSelector((state) => selectCurrentTypos(state, mode));
	return (
		<div>
			<p>Typos: {currentTypos}</p>
		</div>
	);
};

export {Typos};
