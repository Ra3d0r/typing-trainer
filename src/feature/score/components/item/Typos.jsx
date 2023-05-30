import {useSelector} from 'react-redux';

import {selectTypos} from '../../scoreSlice';

const Typos = ({mode}) => {
	const typos = useSelector((state) => selectTypos(state, mode));
	return (
		<div>
			<p>Typos: {typos}</p>
		</div>
	);
};

export {Typos};
