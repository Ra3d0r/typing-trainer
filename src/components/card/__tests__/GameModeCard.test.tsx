import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import GameModeCard from '../GameModeCard';

describe('GameModeCard', () => {
	it('should render', () => {
		render(<GameModeCard language="en" buttonText="play" />, {wrapper: BrowserRouter});
		expect(screen.getByText(/easy/i)).toBeInTheDocument();
	});
});
