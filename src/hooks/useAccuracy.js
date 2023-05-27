import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {selectAllScore, updateAccuracy} from '../feature/score/scoreSlice';

const useAccuracy = (mode) => {
	const dispatch = useDispatch();
	const {totalChars, accuracy, typos} = useSelector((state) => selectAllScore(state, mode));
	useEffect(() => {
		if (totalChars === 0) return;
		const percent = (((totalChars - typos) / totalChars) * 100).toFixed(2);
		dispatch(updateAccuracy({mode, percent}));
	}, [typos]);

	return accuracy;
};

export {useAccuracy};
