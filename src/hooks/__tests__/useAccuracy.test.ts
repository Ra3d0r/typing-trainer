import {renderHook} from '@testing-library/react';
import createReduxWrapper from '@tests/createReduxWrapper';

import {scoreActions} from '@feature/score/scoreSlice';

import useAccuracy from '../useAccuracy';

const {addTotalChars, increaseTypos} = scoreActions;

describe('useAccuracy', () => {
	it('should updated accuracy', () => {
		const {wrapper, store} = createReduxWrapper();
		const {result, rerender} = renderHook(() => useAccuracy('easy'), {wrapper});

		expect(result.current).toBe(100);

		store.dispatch(addTotalChars({mode: 'easy', chars: 10}));
		store.dispatch(increaseTypos({mode: 'easy'}));
		rerender();

		expect(result.current).toBe(90);
	});
});
