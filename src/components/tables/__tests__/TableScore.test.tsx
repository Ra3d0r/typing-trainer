import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {DataSnapshot} from 'firebase/database';

import TableScore from '../TableScore';

const localDate = (date: string) =>
	new Date(date).toLocaleDateString([], {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	});

const date = '2022-01-01';
const columns: DataSnapshot[] = [
	// @ts-ignore
	{
		val: () => {
			return {
				id: '1',
				createdAt: new Date(date).getTime(),
				chars: 55,
				accuracy: 73,
				time: 2000,
				typos: 4,
			};
		},
	},
];

describe('TableScore', () => {
	it('should correct data for TableScore', () => {
		render(
			<TableScore
				action={() => {}}
				loading={false}
				error={undefined}
				columns={columns}
				headers={['Date', 'Chars', 'Accuracy', 'Time', 'Typos', 'Remove']}
				mode={'easy'}
			/>,
		);
		expect(screen.getByText(localDate(date))).toBeInTheDocument();
		expect(screen.getByText('55')).toBeInTheDocument();
		expect(screen.getByText('73%')).toBeInTheDocument();
		expect(screen.getByText('00:02')).toBeInTheDocument();
	});

	it('should action for TableScore', async () => {
		const user = userEvent.setup();
		const action = jest.fn();
		render(
			<TableScore
				action={action}
				loading={false}
				error={undefined}
				columns={columns}
				headers={['Date', 'Chars', 'Accuracy', 'Time', 'Typos', 'Action']}
				mode={'easy'}
			/>,
		);
		await user.click(screen.getByText(/remove/i));
		expect(action).toHaveBeenCalledTimes(1);
	});

	it('should text "No data"', () => {
		render(
			<TableScore
				action={() => {}}
				loading={false}
				error={undefined}
				columns={[]}
				headers={['Date', 'Chars', 'Accuracy', 'Time', 'Typos', 'Remove']}
				mode={'easy'}
			/>,
		);
		expect(screen.getByText(/no data/i)).toBeInTheDocument();
	});
});
