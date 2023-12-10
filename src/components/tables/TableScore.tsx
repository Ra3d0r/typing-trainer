import {useTranslation} from 'react-i18next';
import tw from 'twin.macro';

import millisecondsToDigitTime from '@helpers/millisecondsToDigitTime';

import Loading from '@components/status/Loading';

import {IPropsTableScore} from './types/typesTableScore';

const Table = ({children}: {children: React.ReactNode}) => {
	return (
		<table css={tw`w-full h-[680px] text-sm text-left text-gray-500 dark:text-gray-400`}>
			{children}
		</table>
	);
};

const handleCorrectness = (column: unknown) => {
	if (!column) {
		return '-';
	}
	if (typeof column === 'number') {
		return column + '%';
	}
};

const TableScore = ({headers, columns, mode, action, loading, error}: IPropsTableScore) => {
	const {t, i18n} = useTranslation('translation');
	return (
		<Table>
			<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr>
					{headers.map((header) => {
						return (
							<th scope="col" className="px-6 py-3 text-center" key={header}>
								{header}
							</th>
						);
					})}
				</tr>
			</thead>
			<tbody>
				{loading && (
					<tr>
						<td colSpan={headers.length} className="pt-2 h-20">
							<Loading className="flex justify-center" />
						</td>
					</tr>
				)}
				{error && (
					<tr>
						<td colSpan={headers.length} className="pt-2 h-20">
							{<strong className="flex justify-center">Error: {error.message}</strong>}
						</td>
					</tr>
				)}
				{columns &&
					columns.map((column) => {
						return (
							<tr
								className="h-16 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
								key={column.val().id}
							>
								<td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
									{new Date(column.val()['createdAt']).toLocaleDateString([i18n.language], {
										month: 'short',
										day: 'numeric',
										year: 'numeric',
										hour: 'numeric',
										minute: 'numeric',
										second: 'numeric',
									})}
								</td>
								<td className="px-6 py-4 text-center">{column.val()['chars']}</td>
								<td className="px-6 py-4 text-center">{column.val()['accuracy'] + '%'}</td>
								<td className="px-6 py-4 text-center">
									{millisecondsToDigitTime(column.val()['time'])}
								</td>
								<td className="px-6 py-4 text-center">{column.val()['typos']}</td>
								<td className="px-6 py-4 text-center">
									{handleCorrectness(column.val()['correctness'])}
								</td>
								<td className="px-6 py-4 text-center">{column.val()['lang'] || 'en'}</td>
								<td className="px-6 py-4 text-right">
									<span
										className="font-medium text-red-600 dark:text-red-500 hover:underline hover:cursor-pointer"
										onClick={() => action({id: column.val().id, mode})}
									>
										{t('remove')}
									</span>
								</td>
							</tr>
						);
					})}
				{columns?.length === 0 && !loading && (
					<tr>
						<td colSpan={headers.length} className="pt-2 h-20">
							{<strong className="flex justify-center font-medium">{t('noData')}</strong>}
						</td>
					</tr>
				)}
				<tr>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			</tbody>
		</Table>
	);
};

export default TableScore;
