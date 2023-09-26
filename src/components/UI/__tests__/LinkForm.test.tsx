import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import LinkForm from '../LinkForm';

describe('LinkForm', () => {
	it('should render with text and href', async () => {
		render(<LinkForm to="game">Test</LinkForm>, {wrapper: BrowserRouter});
		expect(screen.getByText('Test')).toBeInTheDocument();
		expect(screen.getByRole('link')).toHaveAttribute('href', '/game');
	});
});
