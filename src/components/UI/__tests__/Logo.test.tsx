import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Logo from '../Logo';

describe('Logo', () => {
	it('should render with text and href', async () => {
		render(<Logo>Test</Logo>, {wrapper: BrowserRouter});
		expect(screen.getByText('Test')).toBeInTheDocument();
		expect(screen.getByRole('link')).toHaveAttribute('href', '/');
	});
});
