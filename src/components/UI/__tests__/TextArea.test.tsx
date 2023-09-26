import {render, screen} from '@testing-library/react';

import TextArea from '../TextArea';

describe('TextArea', () => {
	it('should render', () => {
		render(
			<TextArea
				value="test"
				onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
					e.target;
				}}
			></TextArea>,
		);
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});
});
