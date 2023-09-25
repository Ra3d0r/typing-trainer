import {renderHook} from '@testing-library/react';
import createReduxWrapper from '@tests/createReduxWrapper';

import useTime from '../useTime';

const sleep = (sec: number) => new Promise((resole) => setTimeout(resole, sec * 1000));

jest.mock('../../feature/typing/typingSelectors', () => {
	return {
		selectCurrentTextIndex: jest.fn().mockReturnValue(2),
	};
});

describe('useTime', () => {
	it('should timer to 00:02', async () => {
		const {wrapper} = createReduxWrapper();
		const {result, rerender} = renderHook(() => useTime('easy'), {wrapper});
		await sleep(3);
		rerender();
		expect(result.current).toBe('00:02');
	});
});
