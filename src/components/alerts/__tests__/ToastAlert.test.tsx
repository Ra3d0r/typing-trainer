import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ToastAlert from '../ToastAlert';

describe('ToastAlert', () => {
	it('should close Alert onClick', async () => {
		const user = userEvent.setup();
		const textAlert = 'Error!';
		const closeAlert = jest.fn();
		render(
			<ToastAlert onClick={closeAlert} type="error">
				{textAlert}
			</ToastAlert>,
		);
		expect(screen.getByText(textAlert)).toBeInTheDocument();
		await user.click(screen.getByRole('button', {name: /close/i}));
		expect(closeAlert).toHaveBeenCalledTimes(1);
	});
});
