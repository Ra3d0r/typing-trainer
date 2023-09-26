import {render, screen} from '@testing-library/react';

import Indicator from '../Indicator';

describe('Indicator', () => {
	it('should render Indicator with text', () => {
		const textIndicator = 'TextIndicator';
		render(<Indicator svg={<div />} value="1" text={textIndicator} />);
		const indicator = screen.getByText(textIndicator);
		expect(indicator).toBeInTheDocument();
	});
});
