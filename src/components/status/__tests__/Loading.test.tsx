import {render, screen} from '@testing-library/react';

import Loading from '../Loading';

describe('Status - Loading', () => {
	it('Loader mounted', () => {
		render(<Loading size="lg" />);
		const loading = screen.getByRole('status');
		expect(loading).toBeInTheDocument();
	});
});
