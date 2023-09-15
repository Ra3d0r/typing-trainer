import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderTestApp from '@tests/renderTestApp';
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

	it('should routing to game', async () => {
		const user = userEvent.setup();
		renderTestApp(<GameModeCardItem mode="easy" description="description" title="title" />, {
			initRoute: '/game/easy',
		});
		await user.click(screen.getByText(/play/i));
		expect(screen.getByText(/time/i)).toBeInTheDocument();
	});
});
