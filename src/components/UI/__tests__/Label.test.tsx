import {render, screen} from '@testing-library/react';

import Label from '../Label';

describe('Label', () => {
	it('should render with text', () => {
		render(<Label>Test</Label>);
		expect(screen.getByText('Test')).toBeInTheDocument();
	});
});
