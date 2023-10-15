import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../Button';

describe('Button', () => {
	it('should run onClick function', async () => {
		const onClick = jest.fn();
		const user = userEvent.setup();
		render(<Button onClick={onClick}>Test</Button>);

		await user.click(screen.getByRole('button', {name: 'Test'}));
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
