import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import Footer from './Footer';

describe('Footer', () => {
	it('should render', async () => {
		render(<Footer />, {wrapper: BrowserRouter});
		expect(screen.getByText(/Typing Trainer/i)).toBeInTheDocument();
	});
});
