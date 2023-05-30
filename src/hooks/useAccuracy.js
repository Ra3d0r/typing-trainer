import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
	selectAccuracy,
	selectTotalChars,
	selectTypos,
	updateAccuracy,
} from '../feature/score/scoreSlice';

const useAccuracy = (mode) => {
	const dispatch = useDispatch();
	const totalChars = useSelector((state) => selectTotalChars(state, mode));
	const accuracy = useSelector((state) => selectAccuracy(state, mode));
	const typos = useSelector((state) => selectTypos(state, mode));

	useEffect(() => {
		if (totalChars === 0) return;
		const percent = (((totalChars - typos) / totalChars) * 100).toFixed(2);
		dispatch(updateAccuracy({mode, percent}));
	}, [typos]);

	return accuracy;
};

export {useAccuracy};
