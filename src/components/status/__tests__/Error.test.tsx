import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Error from '../Error';

describe('Status - Error', () => {
	it('Text added', () => {
		const textError = 'test';
		render(<Error message={textError} />);
		const span = screen.getByText(textError);
		expect(span).toBeInTheDocument();
	});
});
