import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tabs from '../Tabs';

describe('Tabs', () => {
	it('should switch mode', async () => {
		const user = userEvent.setup();
		const selectMode = jest.fn();

		render(
			<Tabs
				onClick={selectMode}
				currentMode={'hard'}
				tabs={{easy: 'easy', hard: 'hard', normal: 'normal', custom: 'custom'}}
			/>,
		);
		await user.click(screen.getByText(/easy/i));
		expect(selectMode).toHaveBeenCalledTimes(1);
	});
});
