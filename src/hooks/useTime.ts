import {typeModeUnion} from '@types';

import {selectTime} from '@feature/score/scoreSelectors';
import {scoreActions} from '@feature/score/scoreSlice';
import {selectCurrentTextIndex} from '@feature/typing/typingSelectors';

import millisecondsToDigitTime from '@helpers/millisecondsToDigitTime';

import {useAppDispatch, useAppSelector} from '@store/redux-hooks';

import useInterval from './utils/useInterval';

const {updateTime} = scoreActions;

const useTime = (mode: typeModeUnion) => {
	const time = useAppSelector((state) => selectTime(state, mode));
	const dispatch = useAppDispatch();
	const currentTextIndex = useAppSelector((state) => selectCurrentTextIndex(state, mode));

	useInterval(
		() => {
			dispatch(updateTime({mode}));
		},
		1000,
		currentTextIndex > 0,
	);

	return millisecondsToDigitTime(time);
};

export default useTime;
