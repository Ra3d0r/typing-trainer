import {useEffect} from 'react';

import {typeModeUnion} from '@types';

import {selectAccuracy, selectTotalChars, selectTypos} from '@feature/score/scoreSelectors';
import {scoreActions} from '@feature/score/scoreSlice';

import {useAppDispatch, useAppSelector} from '@store/redux-hooks';

const {updateAccuracy} = scoreActions;

const useAccuracy = (mode: typeModeUnion) => {
	const dispatch = useAppDispatch();
	const totalChars = useAppSelector((state) => selectTotalChars(state, mode));
	const accuracy = useAppSelector((state) => selectAccuracy(state, mode));
	const typos = useAppSelector((state) => selectTypos(state, mode));

	useEffect(() => {
		if (totalChars === 0) {
			return;
		}
		const percent = Number((((totalChars - typos) / totalChars) * 100).toFixed(2));
		dispatch(updateAccuracy({mode, percent}));
	}, [typos, totalChars, mode, dispatch]);

	return accuracy;
};

export default useAccuracy;
