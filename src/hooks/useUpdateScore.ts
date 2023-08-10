import {useEffect, useRef} from 'react';

import {typeModeUnion} from '@types';

import {scoreActions} from '@feature/score/scoreSlice';
import {selectCurrentText} from '@feature/typing/typingSelectors';

import {useAppDispatch, useAppSelector} from '@store/redux-hooks';

const {addTotalChars, reset} = scoreActions;

const useUpdateScore = (mode: typeModeUnion) => {
	const dispatch = useAppDispatch();

	const currentText = useAppSelector((state) => selectCurrentText(state, mode));
	const previousTotalCharsRef = useRef(0);

	useEffect(() => {
		if (previousTotalCharsRef.current !== currentText.length && previousTotalCharsRef.current > 0) {
			dispatch(reset({mode}));
		}
		if (currentText.length) {
			previousTotalCharsRef.current = currentText.length;
			dispatch(addTotalChars({chars: currentText.length, mode}));
		}
	}, [currentText, dispatch, mode]);
};

export default useUpdateScore;
