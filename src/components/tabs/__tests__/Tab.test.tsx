import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tab from '../Tab';

describe('Tab', () => {
	it('should launch function', async () => {
		const user = userEvent.setup();
		const onClick = jest.fn();

		render(<Tab value="easy" active={false} onClick={onClick} key="easy" />);

		await user.click(screen.getByText(/easy/i));
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it('should not launch function', async () => {
		const user = userEvent.setup();
		const onClick = jest.fn();

		render(<Tab value="easy" active={true} onClick={onClick} key="easy" />);

		await user.click(screen.getByText(/easy/i));
		expect(onClick).toHaveBeenCalledTimes(0);
	});
});
