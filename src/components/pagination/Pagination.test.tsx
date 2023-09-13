import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Pagination from './Pagination';

describe('Pagination', () => {
	it('should click button in pagination', async () => {
		const user = userEvent.setup();
		const handleNext = jest.fn();
		const handlePrevious = jest.fn();
		render(
			<Pagination
				currentPage={0}
				totalPages={0}
				setNextPage={handleNext}
				setPreviousPage={handlePrevious}
				nextEnabled={true}
				previousEnabled={true}
			/>,
		);
		await user.click(screen.getByRole('button', {name: /Previous/i}));
		expect(handlePrevious).toHaveBeenCalledTimes(1);

		await user.click(screen.getByRole('button', {name: /Next/i}));
		expect(handleNext).toHaveBeenCalledTimes(1);
	});

	it('should disabled button', () => {
		render(
			<Pagination
				currentPage={0}
				totalPages={0}
				setNextPage={() => null}
				setPreviousPage={() => null}
				nextEnabled={false}
				previousEnabled={false}
			/>,
		);
		expect(screen.getByRole('button', {name: /Next/i})).toBeDisabled();
		expect(screen.getByRole('button', {name: /Previous/i})).toBeDisabled();
	});
});
