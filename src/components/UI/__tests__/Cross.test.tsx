import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Cross from '../Cross';

describe('Cross', () => {
	it('should run onClick function', async () => {
		const onClick = jest.fn();
		const user = userEvent.setup();
		render(<Cross onClick={onClick}></Cross>);

		await user.click(screen.getByRole('button'));
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
