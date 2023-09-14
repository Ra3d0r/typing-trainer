import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import GameModeCardItem from '../GameModeCardItem';

describe('GameModeCardItem', () => {
	it('should render', () => {
		render(<GameModeCardItem mode="easy" description="description" title="title" />, {
			wrapper: BrowserRouter,
		});
		expect(screen.getByText(/description/i)).toBeInTheDocument();
		expect(screen.getByText(/title/i)).toBeInTheDocument();
	});
});
