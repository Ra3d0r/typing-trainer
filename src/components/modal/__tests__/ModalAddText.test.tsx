import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ModalAddText from '../ModalAddText';

describe('ModalAddText', () => {
	it('should render ModalAddText', async () => {
		const user = userEvent.setup();
		const closeModal = jest.fn();
		const addText = jest.fn();

		render(
			<ModalAddText
				closeModal={closeModal}
				addText={addText}
				textAreaValue="Your text..."
				handleChange={() => {}}
				errorMessage="Error message"
			/>,
		);
		await user.click(screen.getByRole('button', {name: /add text/i}));
		expect(addText).toHaveBeenCalledTimes(1);

		await user.click(screen.getByRole('button', {name: /cancel/i}));
		await user.click(screen.getByText('Close modal'));
		expect(closeModal).toHaveBeenCalledTimes(2);
	});
});
